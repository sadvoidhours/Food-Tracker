import './CalorieResult.css'

function CalorieResult({ result, onReset }) {
  return (
    <div className="result-container">
      <div className="result-header">
        <h2>Analysis Results</h2>
      </div>

      <div className="result-content">
        <div className="food-info">
          <h3>Food Identified</h3>
          <p className="food-name">{result.foodName}</p>
        </div>

        <div className="calorie-info">
          <h3>Estimated Calories</h3>
          <div className="calorie-value">
            <span className="calorie-number">{result.calories}</span>
            <span className="calorie-unit">kcal</span>
          </div>
        </div>

        {result.servingSize && (
          <div className="serving-info">
            <h3>Serving Size</h3>
            <p>{result.servingSize}</p>
          </div>
        )}

        {result.nutrients && (
          <div className="nutrients-info">
            <h3>Nutritional Breakdown</h3>
            <div className="nutrients-grid">
              {result.nutrients.protein && (
                <div className="nutrient-item">
                  <span className="nutrient-label">Protein</span>
                  <span className="nutrient-value">{result.nutrients.protein}g</span>
                </div>
              )}
              {result.nutrients.carbs && (
                <div className="nutrient-item">
                  <span className="nutrient-label">Carbs</span>
                  <span className="nutrient-value">{result.nutrients.carbs}g</span>
                </div>
              )}
              {result.nutrients.fat && (
                <div className="nutrient-item">
                  <span className="nutrient-label">Fat</span>
                  <span className="nutrient-value">{result.nutrients.fat}g</span>
                </div>
              )}
              {result.nutrients.fiber && (
                <div className="nutrient-item">
                  <span className="nutrient-label">Fiber</span>
                  <span className="nutrient-value">{result.nutrients.fiber}g</span>
                </div>
              )}
            </div>
          </div>
        )}

        {result.confidence && (
          <div className="confidence-info">
            <p className="confidence-text">
              Confidence: <strong>{result.confidence}</strong>
            </p>
          </div>
        )}

        {result.notes && (
          <div className="notes-info">
            <h3>Additional Notes</h3>
            <p>{result.notes}</p>
          </div>
        )}
      </div>

      <div className="result-actions">
        <button onClick={onReset} className="btn-reset">
          Analyze Another Image
        </button>
      </div>
    </div>
  )
}

export default CalorieResult
