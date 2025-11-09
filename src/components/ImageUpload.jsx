import { useRef, useState } from 'react'
import './ImageUpload.css'

function ImageUpload({ onImageUpload, loading }) {
  const fileInputRef = useRef(null)
  const [dragActive, setDragActive] = useState(false)
  const [dishName, setDishName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file')
      return
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size should be less than 10MB')
      return
    }

    setSelectedFile(file)
  }

  const handleAnalyze = () => {
    if (selectedFile) {
      onImageUpload(selectedFile, dishName)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="upload-container">
      <div className="upload-form-card">
        <h2>Upload Food Image</h2>
        
        <div className="form-group">
          <label htmlFor="dishName">Dish Name (Optional)</label>
          <input
            id="dishName"
            type="text"
            placeholder="e.g., Grilled Chicken Salad, Pasta Carbonara"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            className="dish-input"
            disabled={loading}
          />
          <span className="input-hint">Help AI identify your food more accurately</span>
        </div>

        <div
          className={`upload-box ${dragActive ? 'drag-active' : ''} ${selectedFile ? 'has-file' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            style={{ display: 'none' }}
            disabled={loading}
          />

          <div className="upload-content">
            <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {selectedFile ? (
              <>
                <p className="upload-instruction">Selected: {selectedFile.name}</p>
                <button
                  className="change-button"
                  onClick={handleButtonClick}
                  disabled={loading}
                >
                  Change Image
                </button>
              </>
            ) : (
              <>
                <p className="upload-instruction">
                  Drag and drop an image here, or click to select
                </p>
                <button
                  className="upload-button"
                  onClick={handleButtonClick}
                  disabled={loading}
                >
                  Choose Image
                </button>
                <p className="upload-hint">
                  Supports: JPG, PNG, GIF (Max 10MB)
                </p>
              </>
            )}
          </div>
        </div>

        {selectedFile && (
          <button
            className="analyze-button"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze Image'}
          </button>
        )}
      </div>
    </div>
  )
}

export default ImageUpload
