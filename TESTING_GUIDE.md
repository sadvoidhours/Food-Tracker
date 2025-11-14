# Testing Guide for Enhanced Food Calorie Tracker

## 🧪 Testing Checklist

### 1. Visual Design Testing

#### White Background & Blue Accents
- [ ] App background is blue gradient
- [ ] All cards have white background
- [ ] Primary buttons are blue (#3b82f6)
- [ ] Hover states show darker blue (#2563eb)
- [ ] Selected allergen tags are blue
- [ ] Nutrient bars use color scheme:
  - Blue for Protein
  - Purple for Carbs
  - Pink for Fat
  - Green for Fiber

### 2. Mobile Responsiveness Testing

Test on these screen sizes:
- [ ] Large Desktop (1200px+)
- [ ] Desktop (1024px)
- [ ] Tablet (768px)
- [ ] Large Mobile (640px)
- [ ] Mobile (480px)
- [ ] Small Mobile (375px)
- [ ] Extra Small (320px)

Check for:
- [ ] Readable text at all sizes
- [ ] No horizontal scrolling
- [ ] Touch-friendly buttons (min 44px)
- [ ] Proper layout stacking
- [ ] Circular calorie display scales properly
- [ ] Tables don't overflow
- [ ] Progress bars display correctly

### 3. Branded Product Detection

Test with photos of:
- [ ] Coca-Cola can/bottle
- [ ] Lay's chips bag
- [ ] Hershey's chocolate bar
- [ ] Nature Valley granola bar
- [ ] Any product with nutrition label visible

Verify:
- [ ] Brand badge appears (🏷️)
- [ ] Brand name is displayed
- [ ] Product name is displayed
- [ ] Ingredients list is extracted (if visible)
- [ ] Ingredients section appears for branded products

### 4. Full Nutrition Facts Table

Upload a food image and verify table shows:
- [ ] Calories row (bold)
- [ ] Total Fat (bold with separator)
- [ ] Saturated Fat (indented)
- [ ] Trans Fat (indented, if present)
- [ ] Cholesterol (with separator)
- [ ] Sodium (with separator)
- [ ] Potassium (with separator, if present)
- [ ] Total Carbohydrates (bold with separator)
- [ ] Dietary Fiber (indented)
- [ ] Total Sugars (indented)
- [ ] Protein (bold with separator)

Verify vitamins table shows (if available):
- [ ] Vitamin A (% DV)
- [ ] Vitamin C (% DV)
- [ ] Vitamin D (% DV)
- [ ] Calcium (% DV)
- [ ] Iron (% DV)

### 5. Visual Data Representation

#### Circular Calorie Display
- [ ] Circle appears centered
- [ ] Progress arc shows correct percentage
- [ ] Calorie number is large and readable
- [ ] "kcal" unit displays below number
- [ ] Blue color matches theme

#### Nutrient Progress Bars
- [ ] Bars display for Protein, Carbs, Fat, Fiber
- [ ] Label on left, value on right
- [ ] Progress fills proportionally
- [ ] Colors are distinct and attractive
- [ ] Smooth animation on load

### 6. Allergy Management

#### Common Allergies
Test selecting these from buttons:
- [ ] Peanuts
- [ ] Tree Nuts
- [ ] Milk
- [ ] Eggs
- [ ] Wheat
- [ ] Soy
- [ ] Fish
- [ ] Shellfish
- [ ] Sesame
- [ ] Gluten

Verify:
- [ ] Button toggles to blue when selected
- [ ] Multiple selections work
- [ ] Deselection works

#### Custom Allergies
- [ ] Can type custom allergies in text field
- [ ] Multiple custom allergies with commas work
- [ ] Both common + custom allergies are sent to AI

#### Allergy Warnings
Upload food containing allergens:
- [ ] Red warning box appears if allergen detected
- [ ] Warning message is clear
- [ ] Detected allergens list is shown
- [ ] "May Contain" section shows potential allergens

Test foods:
- Peanut butter (for peanuts)
- Milk chocolate (for milk)
- Bread (for wheat/gluten)
- Sushi (for fish)

### 7. Healthy Alternatives

Upload various foods and check alternatives:
- [ ] At least 2-3 alternatives provided
- [ ] Each has a name
- [ ] Each has a reason (specific nutritional comparison)
- [ ] Calorie savings shown (if > 0)
- [ ] Green themed section
- [ ] Alternatives are actually healthier

Test with:
- French fries → suggest baked alternatives
- Soda → suggest water/tea
- Ice cream → suggest frozen yogurt
- White bread → suggest whole grain

### 8. Ingredients List (Branded Products)

Upload packaged food with visible ingredients list:
- [ ] Ingredients section appears
- [ ] Light blue background
- [ ] Complete ingredient list extracted
- [ ] Readable formatting
- [ ] Section only appears for branded products

Test with:
- Nutrition bar wrapper
- Cereal box
- Candy package
- Canned soup label

### 9. Both Input Methods

#### Image Upload
- [ ] Drag and drop works
- [ ] Click to browse works
- [ ] File validation (images only)
- [ ] Size validation (< 10MB)
- [ ] Preview displays
- [ ] Analyze button enabled when file selected

#### Manual Input
- [ ] Textarea accepts text
- [ ] Example placeholder is helpful
- [ ] Analyze works with ingredients list
- [ ] Results are reasonable

### 10. Error Handling

Test error cases:
- [ ] No API key → clear error message
- [ ] Invalid image → helpful error
- [ ] Network error → retry suggestion
- [ ] Unclear image → low confidence noted
- [ ] No food detected → appropriate message

### 11. Loading States

- [ ] Spinner appears during analysis
- [ ] Loading message is clear
- [ ] UI is disabled during loading
- [ ] No duplicate requests possible

### 12. Cross-Browser Testing

Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### 13. Accessibility

- [ ] Tab navigation works
- [ ] Focus indicators visible
- [ ] Color contrast sufficient (WCAG AA)
- [ ] Text is readable
- [ ] Touch targets are large enough
- [ ] Screen reader friendly (semantic HTML)

## 🎯 Sample Test Scenarios

### Scenario 1: Branded Soda Detection
1. Take photo of Coca-Cola can with nutrition label visible
2. Select "Gluten" as allergy (if applicable)
3. Upload image
4. Expected results:
   - Brand badge: "Coca-Cola - Coca-Cola Classic"
   - Complete nutrition table
   - Ingredients list extracted
   - Healthy alternatives (water, tea, sparkling water)
   - Calorie savings shown

### Scenario 2: Homemade Meal Analysis
1. Take photo of pasta dish
2. Enter dish name: "Spaghetti Carbonara"
3. Select allergies: "Milk", "Wheat"
4. Upload image
5. Expected results:
   - Food name identified
   - Allergy warnings for milk (from cheese/cream) and wheat (from pasta)
   - Complete nutrition breakdown
   - Alternatives (whole wheat pasta, vegetarian versions)

### Scenario 3: Manual Ingredient Entry
1. Switch to Manual Input mode
2. Enter dish name: "Protein Smoothie"
3. Select "Tree Nuts" allergy
4. Enter ingredients:
   ```
   1 banana
   1 cup almond milk
   2 tbsp peanut butter
   1 scoop protein powder
   1 cup ice
   ```
5. Expected results:
   - Combined nutritional values
   - Warning for tree nuts (almond milk)
   - Alternatives (regular milk, oat milk)

### Scenario 4: Mobile Experience
1. Open on smartphone
2. Upload food image
3. Verify:
   - Single column layout
   - Readable text
   - Table fits screen
   - Circular calorie display scales
   - Buttons are tappable
   - No pinch/zoom needed

## 📊 Success Criteria

All features pass if:
- ✅ Visual design is clean with white/blue theme
- ✅ Mobile responsive at all breakpoints
- ✅ Branded products detected accurately
- ✅ Complete nutrition table displays
- ✅ Visual elements (circle, bars) work properly
- ✅ Allergy system functions correctly
- ✅ Healthy alternatives are relevant
- ✅ Ingredients extracted for branded products
- ✅ No console errors
- ✅ Fast loading and smooth animations

## 🐛 Known Limitations

- AI accuracy depends on image quality
- Branded product detection requires visible branding
- Ingredient extraction needs clear label photos
- Estimates may vary from actual nutritional content
- API rate limits may apply

## 📝 Reporting Issues

If you find issues, note:
1. What were you testing?
2. What did you expect?
3. What actually happened?
4. Device/browser information
5. Screenshots if applicable
6. Console errors if any
