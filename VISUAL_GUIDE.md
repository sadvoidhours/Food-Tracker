# Food Calorie Tracker - Quick Visual Guide

## 🎨 Design Changes

### Color Palette
```
Primary Blue:    #3b82f6 (rgb(59, 130, 246))
Secondary Blue:  #2563eb (rgb(37, 99, 235))
Background:      Linear gradient from #3b82f6 to #2563eb

Text Colors:
- Headers:       #1a1a1a
- Body:          #4a5568
- Subtle:        #6b7280
```

### Visual Elements

#### 1. Circular Calorie Display
```
┌─────────────────┐
│   ╭──────╮      │
│  ╱        ╲     │
│ │   1200   │    │ ← SVG circle with progress
│ │   kcal   │    │
│  ╲        ╱     │
│   ╰──────╯      │
└─────────────────┘
```

#### 2. Nutrient Progress Bars
```
Protein              45g
███████████░░░░░░░░░  (90%)

Carbs               230g
██████████████████░░  (76%)

Fat                 55g
██████████████░░░░░░  (70%)
```

#### 3. Nutrition Facts Table
```
┌─────────────────────────────────────┐
│ Complete Nutritional Information    │
├─────────────────────────────────────┤
│ Calories                  1200 kcal │
├─────────────────────────────────────┤
│ Total Fat                      55g  │
│   Saturated Fat                12g  │
│   Trans Fat                     0g  │
├─────────────────────────────────────┤
│ Cholesterol                    45mg │
├─────────────────────────────────────┤
│ Sodium                        890mg │
└─────────────────────────────────────┘
```

## 📱 Responsive Breakpoints

### Desktop (> 768px)
- Full multi-column layout
- Large circular calorie display (140px)
- 3-4 column nutrient grid
- Full-width tables

### Tablet (640px - 768px)
- 2-3 column nutrient grid
- Medium circular display (120px)
- Adjusted padding

### Mobile (< 640px)
- Single column layout
- 2 column nutrient grid
- Small circular display (100px)
- Compact table cells
- Reduced padding (1rem)

### Small Mobile (< 480px)
- Extra compact layout
- Smallest circular display
- Single column where possible
- Minimum touch targets (44px)

## 🎯 Key Features Layout

### Main Result Card
```
┌─────────────────────────────────────┐
│ Analysis Results                     │
├─────────────────────────────────────┤
│ 🏷️ Branded Product Badge            │
│                                      │
│ ⚠️ Allergy Warning (if detected)    │
│                                      │
│ [Circular Calorie Display]           │
│                                      │
│ [Nutrient Progress Bars]             │
│                                      │
│ [Complete Nutrition Table]           │
│                                      │
│ 📋 Ingredients (if branded)          │
│                                      │
│ ⚠️ May Contain (allergens)           │
│                                      │
│ 💡 Healthier Alternatives            │
│                                      │
│ ℹ️ Additional Notes                  │
│                                      │
│ [Analyze Another Food Button]        │
└─────────────────────────────────────┘
```

## 🔧 Component Structure

```
App.jsx
├── ImageUpload.jsx (or ManualInput.jsx)
│   ├── Dish Name Input
│   ├── Allergy Selector (buttons)
│   ├── Custom Allergy Input
│   ├── Upload Area / Ingredient Textarea
│   └── Analyze Button
│
└── CalorieResult.jsx
    ├── Food Info + Brand Badge
    ├── Allergy Warning
    ├── Circular Calorie Display
    ├── Nutrient Progress Bars
    ├── Complete Nutrition Table
    ├── Ingredients (branded)
    ├── May Contain Allergens
    ├── Healthy Alternatives
    └── Action Buttons
```

## 💡 Usage Tips

### For Branded Products
1. Take clear photo of nutrition label
2. Include brand name/logo in frame
3. Ensure ingredient list is visible
4. AI will extract all information

### For Allergy Management
1. Select common allergens from buttons
2. Add custom allergens in text field
3. Warnings appear if detected
4. "May Contain" shows potential risks

### For Best Results
- Upload clear, well-lit images
- Include entire dish in frame
- Add dish name for better accuracy
- Review healthy alternatives

## 🎨 CSS Classes Reference

### Main Containers
- `.result-container` - Main results wrapper
- `.food-info` - Food identification section
- `.calorie-info` - Calorie display section
- `.nutrients-info` - Nutrition facts section
- `.ingredients-info` - Ingredients list (branded)
- `.alternatives-info` - Healthy alternatives

### Visual Elements
- `.calorie-circle` - Circular calorie display
- `.calorie-svg` - SVG circle element
- `.nutrient-bar-item` - Progress bar container
- `.nutrition-facts-table` - FDA-style table

### Status Elements
- `.branded-badge` - Brand product indicator
- `.allergy-warning` - Red allergy warning box
- `.allergen-tag` - Allergen badge/tag

### Responsive Classes
- Media queries at: 768px, 640px, 480px
- Auto-adjusting grids
- Flexible typography
