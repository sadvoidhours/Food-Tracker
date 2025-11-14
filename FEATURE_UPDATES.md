# Food Calorie Tracker - Feature Updates

## New Features Added

### 1. Full Nutrition Facts
The app now provides comprehensive nutritional information including:
- **Macronutrients**: Protein, Carbs, Total Fat, Fiber
- **Additional Nutrients**: Sugar, Saturated Fat, Sodium, Cholesterol
- **Vitamins & Minerals**: Vitamin A, Vitamin C, Calcium, Iron (shown as % of daily value)

### 2. Branded Food Product Detection
- Automatically detects branded/packaged food products
- Identifies brand names and specific product names from packaging
- Displays branded products with a special badge

### 3. Allergy Information & Warnings
- Users can now specify their allergies and dietary restrictions
- Common allergens available as quick-select buttons:
  - Peanuts, Tree Nuts, Milk, Eggs, Wheat, Soy, Fish, Shellfish, Sesame, Gluten
- Custom allergen input field for additional allergies
- **Allergy Warnings**: Highlighted alerts when detected allergens match user's list
- **May Contain**: Lists common allergens that might be present in the food

### 4. Healthy Alternatives
- Provides 2-3 healthier alternative food options
- Shows estimated calorie savings for each alternative
- Includes explanations of why each alternative is healthier
- Applies to both image-based and manual ingredient analysis

## Updated Components

### `geminiService.js`
- Enhanced `analyzeFood()` function to accept `allergyInfo` parameter
- Enhanced `analyzeIngredients()` function to accept `allergyInfo` parameter
- Expanded AI prompts to request full nutrition facts, branded product detection, allergy warnings, and healthy alternatives
- Updated response parsing to handle new data structure

### `ImageUpload.jsx`
- Added allergy selector with common allergens
- Added custom allergy input field
- Updated to pass allergy information to analysis function

### `ManualInput.jsx`
- Added allergy selector with common allergens
- Added custom allergy input field
- Updated to pass allergy information to analysis function

### `CalorieResult.jsx`
- Added branded product badge display
- Added prominent allergy warning section
- Expanded nutrition facts display with all available nutrients
- Added vitamins & minerals section
- Added "May Contain" allergen tags
- Added healthy alternatives section with calorie savings

### CSS Updates
- `ImageUpload.css`: Added styles for allergy selector buttons
- `ManualInput.css`: Added styles for allergy selector buttons
- `CalorieResult.css`: Added styles for:
  - Branded product badges
  - Allergy warning sections
  - Expanded nutrition facts
  - Allergen tags
  - Healthy alternatives cards

### `App.jsx`
- Updated `handleImageUpload()` to pass allergy information
- Updated `handleManualInput()` to pass allergy information

## How to Use

### Setting Allergies
1. Click on the common allergen buttons to select your allergies
2. Add custom allergies in the text field (comma-separated)
3. The system will check for these allergens in your food

### Viewing Results
- **Branded Products**: Look for the 🏷️ badge under the food name
- **Allergy Warnings**: Red warning box appears if allergens are detected
- **Full Nutrition**: Comprehensive breakdown including vitamins and minerals
- **Healthy Alternatives**: Green section at the bottom shows healthier options

## Technical Implementation

The AI (Gemini 2.5 Flash Lite) now analyzes:
1. Visual elements including brand logos and packaging
2. Ingredient composition for allergen detection
3. Complete nutritional profile when identifiable
4. Context-appropriate healthy alternatives
5. Cross-references user's allergy list with food composition

All features work with both:
- Image upload mode
- Manual ingredient input mode
