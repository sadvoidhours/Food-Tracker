import { useState } from 'react'
import './ManualInput.css'

function ManualInput({ onAnalyze, loading }) {
  const [ingredients, setIngredients] = useState('')
  const [dishName, setDishName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ingredients.trim()) {
      onAnalyze(ingredients, dishName)
    }
  }

  return (
    <div className="manual-input-container">
      <div className="manual-input-box">
        <h2>Enter Ingredients Manually</h2>

        <form onSubmit={handleSubmit} className="manual-input-form">
          <div className="form-group">
            <label htmlFor="dishNameManual">Dish Name (Optional)</label>
            <input
              id="dishNameManual"
              type="text"
              placeholder="e.g., Chicken Stir Fry, Greek Salad"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              className="dish-input"
              disabled={loading}
            />
            <span className="input-hint">Help AI understand your meal better</span>
          </div>

          <div className="form-group">
            <label htmlFor="ingredients">Ingredients & Quantities</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Example:&#10;2 eggs&#10;1 cup rice&#10;100g chicken breast&#10;1 tablespoon olive oil&#10;1/2 avocado"
              rows="8"
              className="ingredients-textarea"
              disabled={loading}
            />
            <span className="input-hint">Be specific with quantities for accurate estimates</span>
          </div>

          <button
            type="submit"
            className="analyze-button"
            disabled={loading || !ingredients.trim()}
          >
            {loading ? 'Analyzing...' : 'Analyze Ingredients'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ManualInput
