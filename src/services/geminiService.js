import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

if (!API_KEY) {
  console.error('Gemini API key is not set. Please add VITE_GEMINI_API_KEY to your .env file')
}

const genAI = new GoogleGenerativeAI(API_KEY)

/**
 * Convert file to base64 string
 */
async function fileToGenerativePart(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64Data = reader.result.split(',')[1]
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      })
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/**
 * Analyze food image using Gemini Vision API
 */
export async function analyzeFood(imageFile, dishName = '') {
  if (!API_KEY) {
    throw new Error('Gemini API key is not configured. Please add your API key to .env file')
  }

  try {
    // Get the generative model (Gemini 1.5 Flash supports image analysis and is more stable)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' })

    // Convert image to format Gemini can process
    const imagePart = await fileToGenerativePart(imageFile)

    // Create the prompt for food analysis
    const dishContext = dishName ? `\nThe user indicated this is: "${dishName}". Use this as context to help with identification.` : '';
    const prompt = `Analyze this food image and provide the following information in JSON format:${dishContext}
    {
      "foodName": "name of the food or dish",
      "calories": estimated total calories (number only),
      "servingSize": "estimated serving size",
      "nutrients": {
        "protein": protein in grams (number only),
        "carbs": carbohydrates in grams (number only),
        "fat": fat in grams (number only),
        "fiber": fiber in grams (number only, if significant)
      },
      "confidence": "high/medium/low",
      "notes": "any additional relevant information about the food"
    }

    If you cannot identify the food clearly, set confidence to "low" and provide your best estimate with a note explaining the limitation.
    Return ONLY valid JSON, no additional text or markdown.`

    // Generate content with both text and image
    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    const text = response.text()

    // Parse the JSON response
    try {
      // Remove markdown code blocks if present
      const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      const parsedResult = JSON.parse(cleanedText)
      
      // Validate and ensure required fields exist
      return {
        foodName: parsedResult.foodName || 'Unknown Food',
        calories: parsedResult.calories || 0,
        servingSize: parsedResult.servingSize || 'Not specified',
        nutrients: parsedResult.nutrients || {},
        confidence: parsedResult.confidence || 'medium',
        notes: parsedResult.notes || '',
      }
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', text)
      
      // Fallback: try to extract calorie information from text
      const calorieMatch = text.match(/(\d+)\s*(calories|kcal)/i)
      const calories = calorieMatch ? parseInt(calorieMatch[1]) : 0
      
      return {
        foodName: 'Food Item',
        calories: calories,
        servingSize: 'Not specified',
        nutrients: {},
        confidence: 'low',
        notes: 'Could not fully analyze the image. Please try with a clearer image.',
      }
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error)
    
    if (error.message?.includes('API key')) {
      throw new Error('Invalid API key. Please check your Gemini API key.')
    } else if (error.message?.includes('quota')) {
      throw new Error('API quota exceeded. Please try again later.')
    } else {
      throw new Error('Failed to analyze image. Please try again.')
    }
  }
}

/**
 * Analyze ingredients list using Gemini API
 */
export async function analyzeIngredients(ingredientsList, dishName = '') {
  if (!API_KEY) {
    throw new Error('Gemini API key is not configured. Please add your API key to .env file')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' })

    const dishContext = dishName ? `\nDish Name: ${dishName}` : '';
    const prompt = `Analyze these ingredients and their quantities, then provide nutritional information in JSON format:${dishContext}

Ingredients:
${ingredientsList}

Provide the response in this JSON format:
{
  "foodName": "brief description of the meal/dish${dishName ? ` (use "${dishName}" as reference)` : ''}",
  "calories": total estimated calories (number only),
  "servingSize": "estimated total serving size",
  "nutrients": {
    "protein": total protein in grams (number only),
    "carbs": total carbohydrates in grams (number only),
    "fat": total fat in grams (number only),
    "fiber": total fiber in grams (number only, if significant)
  },
  "confidence": "high/medium/low",
  "notes": "any additional relevant nutritional information"
}

Calculate the total nutritional values for all listed ingredients combined.
Return ONLY valid JSON, no additional text or markdown.`

    const result = await model.generateContent([prompt])
    const response = await result.response
    const text = response.text()

    try {
      const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      const parsedResult = JSON.parse(cleanedText)
      
      return {
        foodName: parsedResult.foodName || 'Custom Ingredients',
        calories: parsedResult.calories || 0,
        servingSize: parsedResult.servingSize || 'As listed',
        nutrients: parsedResult.nutrients || {},
        confidence: parsedResult.confidence || 'medium',
        notes: parsedResult.notes || '',
      }
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', text)
      
      const calorieMatch = text.match(/(\d+)\s*(calories|kcal)/i)
      const calories = calorieMatch ? parseInt(calorieMatch[1]) : 0
      
      return {
        foodName: 'Custom Ingredients',
        calories: calories,
        servingSize: 'As listed',
        nutrients: {},
        confidence: 'low',
        notes: 'Could not fully analyze the ingredients. Please check your input.',
      }
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error)
    
    if (error.message?.includes('API key')) {
      throw new Error('Invalid API key. Please check your Gemini API key.')
    } else if (error.message?.includes('quota')) {
      throw new Error('API quota exceeded. Please try again later.')
    } else {
      throw new Error('Failed to analyze ingredients. Please try again.')
    }
  }
}
