# 🍽️ Food Calorie Tracker

A React + Vite application that uses Google's Gemini AI to identify food from images and estimate their calorie content.

## Features

- 📸 Upload food images via drag-and-drop or file selection
- 🤖 AI-powered food recognition using Google Gemini Vision API
- 🔥 Automatic calorie estimation
- 🥗 Nutritional breakdown (protein, carbs, fat, fiber)
- 📊 Beautiful, responsive UI
- ⚡ Fast performance with Vite

## Prerequisites

- Node.js (version 16 or higher)
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

3. Add your Gemini API key to the `.env` file:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

3. Upload a food image by:
   - Dragging and dropping an image onto the upload area
   - Clicking the "Choose Image" button and selecting a file

4. Wait for the AI to analyze the image and display the results

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Google Gemini AI** - Vision API for food recognition
- **CSS3** - Styling with modern CSS features

## Project Structure

```
food-calorie-tracker/
├── src/
│   ├── components/
│   │   ├── ImageUpload.jsx      # Image upload component
│   │   ├── ImageUpload.css
│   │   ├── CalorieResult.jsx    # Results display component
│   │   └── CalorieResult.css
│   ├── services/
│   │   └── geminiService.js     # Gemini API integration
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── main.jsx                 # App entry point
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── .env                         # Your API keys (create this)
```

## API Key Setup

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to your `.env` file

## Notes

- The app estimates calories based on visual analysis and may not be 100% accurate
- Works best with clear, well-lit images of food
- Supports JPG, PNG, and GIF formats (max 10MB)
- Requires an active internet connection to use the Gemini API

## License

MIT

## Contributing

Feel free to open issues or submit pull requests!
