# Quick Start Guide - Enhanced Food Calorie Tracker

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Google Gemini API Key
- Modern web browser

### Installation & Setup

1. **Install Dependencies**
   ```powershell
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. **Start Development Server**
   ```powershell
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## ✨ New Features Guide

### 1. Using the White & Blue Theme
The app now features:
- Clean white background for content cards
- Blue gradient background (#3b82f6 to #2563eb)
- Modern blue accent colors throughout
- Professional, medical-app-like appearance

### 2. Analyzing Branded Products

**How to get the best results:**

1. **Take a clear photo** of the product showing:
   - Brand name/logo
   - Product name
   - Nutrition Facts label (if packaged)
   - Ingredients list (if visible on packaging)

2. **Good examples to try:**
   - Soda cans (Coca-Cola, Pepsi)
   - Chip bags (Lay's, Doritos)
   - Candy bars (Snickers, Kit Kat)
   - Cereal boxes (Cheerios, Corn Flakes)
   - Energy bars (Clif Bar, Nature Valley)

3. **What you'll get:**
   - 🏷️ Branded product badge
   - Complete brand and product name
   - Full nutrition facts table
   - Complete ingredients list
   - Healthy alternatives with the same food type

### 3. Managing Allergies

**Two ways to input allergies:**

1. **Quick Select Buttons**
   - Click common allergen buttons (Peanuts, Milk, Eggs, etc.)
   - They turn blue when selected
   - Click again to deselect

2. **Custom Allergies**
   - Type in the text field below buttons
   - Separate multiple allergies with commas
   - Example: "avocado, tomatoes, shellfish"

**What happens with allergies:**
- ⚠️ Red warning box if detected allergens match your list
- List of detected allergens
- "May Contain" section for potential allergens
- AI considers your allergies in alternative suggestions

### 4. Understanding the Visual Data

#### Circular Calorie Display
- **Blue circle** fills based on a 2500 calorie daily diet
- **Large number** in center shows total calories
- **Smooth animation** on load

#### Nutrient Progress Bars
Four colored bars show macronutrients:
- 🔵 **Blue** = Protein (max 50g reference)
- 🟣 **Purple** = Carbs (max 300g reference)
- 🌸 **Pink** = Fat (max 78g reference)
- 🟢 **Green** = Fiber (max 28g reference)

Bars fill proportionally to show at-a-glance nutritional breakdown.

#### Complete Nutrition Table
Full FDA-style nutrition facts showing:
- Main nutrients (calories, fat, cholesterol, sodium, carbs, protein)
- Sub-nutrients (saturated fat, trans fat, fiber, sugar)
- Vitamins & minerals with % Daily Values
- Clear visual hierarchy with bold headers and indentation

### 5. Getting Healthy Alternatives

The AI provides 2-3 healthier options with:
- **Alternative name**: Specific food or brand recommendation
- **Reasoning**: Why it's healthier (nutritional comparison)
- **Calorie savings**: How many calories you save

**Example:**
```
Alternative: Baked Sweet Potato Fries
Reason: Lower in fat and sodium, higher in fiber and vitamin A
Calorie Savings: -150 kcal
```

### 6. Ingredient Lists (Branded Products)

For packaged foods, you'll see:
- 📋 **Ingredients Section** with light blue background
- Complete list of ingredients as shown on packaging
- Useful for checking additives, preservatives, etc.
- Only appears when AI detects a branded product

## 📱 Mobile Usage

### Best Practices for Mobile:
1. **Portrait orientation** works best
2. **Good lighting** for photos
3. **Steady hands** or use timer
4. **Fill the frame** with the food/product
5. **Tap to focus** before taking photo

### Mobile Features:
- Responsive design adapts to your screen
- Touch-friendly buttons (large tap targets)
- Optimized tables that don't overflow
- Smaller but still readable text
- Efficient use of vertical space

## 🎯 Tips for Best Results

### For Image Upload Mode:

1. **Lighting matters**
   - Use natural light when possible
   - Avoid shadows on the food
   - No glare on packaging

2. **Frame your shot**
   - Fill most of the frame with food/product
   - Include nutrition label if packaged
   - Capture brand name/logo clearly

3. **Add context**
   - Fill in the dish name (optional but helpful)
   - Select relevant allergies
   - Take clear, focused photos

### For Manual Input Mode:

1. **Be specific**
   ```
   Good: "2 cups cooked white rice, 6 oz grilled chicken breast"
   Less Good: "rice and chicken"
   ```

2. **Include quantities**
   - Use standard measurements (cups, oz, grams)
   - Be as accurate as possible
   - List all ingredients

3. **Separate ingredients**
   - One ingredient per line OR
   - Use commas to separate

## 🔄 Workflow Examples

### Example 1: Fast Food Analysis
1. Order McDonald's Big Mac
2. Take photo of burger
3. Select allergen: "Wheat", "Sesame"
4. Upload photo
5. Review results:
   - Calorie count with visual circle
   - Full nutrition breakdown
   - Allergy warnings
   - Healthier alternatives (grilled chicken sandwich, salad)

### Example 2: Grocery Shopping
1. Considering buying Lay's Classic Chips
2. Photo the back of bag (nutrition label + ingredients)
3. No allergies selected
4. Upload and review:
   - Brand detected: Lay's
   - Complete ingredients list
   - High sodium warning
   - Alternatives: Baked chips, pretzels, popcorn

### Example 3: Meal Prep Planning
1. Switch to Manual Input
2. Enter "Buddha Bowl" as dish name
3. List ingredients:
   ```
   1 cup quinoa, cooked
   1 cup chickpeas
   1 cup roasted vegetables
   2 tbsp tahini dressing
   1/4 avocado
   ```
4. Get complete nutritional breakdown
5. See healthier modifications if desired

## 📊 Understanding Results

### Confidence Levels
- **High**: Clear image, recognizable food
- **Medium**: Some uncertainty but reasonable estimate
- **Low**: Unclear image or unfamiliar food

### Notes Section
Check this for:
- Additional context about the food
- Limitations of the analysis
- Preparation method considerations
- Serving size clarifications

## 🎨 Theme Customization

Current theme features:
- **Primary Blue**: #3b82f6
- **Secondary Blue**: #2563eb
- **White Cards**: Clean, professional look
- **Subtle Shadows**: Modern depth

All colors are accessible (WCAG AA compliant).

## 🐛 Troubleshooting

### "Failed to analyze the image"
- Check internet connection
- Verify API key is set correctly
- Try a clearer photo
- Check image file size (< 10MB)

### "Low confidence" results
- Retake photo with better lighting
- Add dish name for context
- Try different angle
- Ensure food is clearly visible

### Branded product not detected
- Ensure brand name/logo visible
- Take photo of front of package
- Try zooming in on logo
- Add brand name in dish name field

### Nutrition table incomplete
- Some values may not be available
- AI provides what it can detect
- More complete for branded products
- Manual foods show estimates

## 📞 Support

For issues or questions:
1. Check the TESTING_GUIDE.md for known limitations
2. Review ENHANCEMENT_SUMMARY.md for feature details
3. Check browser console for errors
4. Verify API key is valid and has quota

## 🎉 Enjoy Your Enhanced Food Tracker!

You now have:
- ✅ Beautiful white & blue design
- ✅ Full nutrition facts tables
- ✅ Visual data displays
- ✅ Branded product detection
- ✅ Ingredient lists
- ✅ Allergy management
- ✅ Healthy alternatives
- ✅ Mobile-friendly interface

Happy tracking! 🥗🍎🥤
