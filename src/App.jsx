import { useState } from 'react'
import './App.css'
import ImageUpload from './components/ImageUpload'
import ManualInput from './components/ManualInput'
import CalorieResult from './components/CalorieResult'
import { analyzeFood, analyzeIngredients } from './services/geminiService'

function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [inputMode, setInputMode] = useState('image') // 'image' or 'manual'

  const handleImageUpload = async (file, dishName = '', allergyInfo = []) => {
    setLoading(true)
    setError(null)
    setResult(null)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)

    try {
      const analysis = await analyzeFood(file, dishName, allergyInfo)
      setResult(analysis)
    } catch (err) {
      setError(err.message || 'Failed to analyze the image. Please try again.')
      console.error('Error analyzing food:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setResult(null)
    setError(null)
    setImagePreview(null)
  }

  const handleManualInput = async (ingredients, dishName = '', allergyInfo = []) => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const analysis = await analyzeIngredients(ingredients, dishName, allergyInfo)
      setResult(analysis)
    } catch (err) {
      setError(err.message || 'Failed to analyze ingredients. Please try again.')
      console.error('Error analyzing ingredients:', err)
    } finally {
      setLoading(false)
    }
  }

  const toggleInputMode = () => {
    setInputMode(inputMode === 'image' ? 'manual' : 'image')
    handleReset()
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Food Calorie Tracker</h1>
        <p>Upload a food image or enter ingredients manually</p>
        
        <div className="mode-toggle">
          <button 
            className={`mode-btn ${inputMode === 'image' ? 'active' : ''}`}
            onClick={() => inputMode !== 'image' && toggleInputMode()}
          >
            Upload Image
          </button>
          <button 
            className={`mode-btn ${inputMode === 'manual' ? 'active' : ''}`}
            onClick={() => inputMode !== 'manual' && toggleInputMode()}
          >
            Manual Input
          </button>
        </div>
      </header>

      <main className="app-main">
        {!result && !imagePreview ? (
          inputMode === 'image' ? (
            <ImageUpload onImageUpload={handleImageUpload} loading={loading} />
          ) : (
            <ManualInput onAnalyze={handleManualInput} loading={loading} />
          )
        ) : (
          <div className="results-container">
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Uploaded food" />
              </div>
            )}
            
            {loading && (
              <div className="loading">
                <div className="spinner"></div>
                <p>Analyzing your food...</p>
              </div>
            )}

            {error && (
              <div className="error">
                <p>{error}</p>
                <button onClick={handleReset} className="btn-secondary">
                  Try Again
                </button>
              </div>
            )}

            {result && <CalorieResult result={result} onReset={handleReset} />}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Powered by Google Gemini AI</p>
      </footer>
    </div>
  )
}

export default App
