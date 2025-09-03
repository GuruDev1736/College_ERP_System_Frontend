# College ERP System - Simple Structure

## Project Structure (Very Simple!)

```
src/
├── main.jsx                 # App entry point
├── App.jsx                  # Main app with routes
├── App.css                  # Main styles
├── index.css                # Global styles
├── ThreeBackground.jsx      # 3D background component
├── Squares.jsx              # UI component
├── assets/                  # Images, icons
└── Pages/                   # All your pages
    ├── Login.jsx            # Login page
    └── Dashboard.jsx        # Dashboard page
```

## How it works:

1. **main.jsx** - This starts everything
2. **App.jsx** - This has your routes (which page to show)
3. **Pages/** - Put all your pages here (Login, Dashboard, etc.)
4. **ThreeBackground.jsx** - Your 3D background
5. **App.css & index.css** - Your styles

## To add a new page:
1. Create `NewPage.jsx` in the `Pages/` folder
2. Add the route in `App.jsx`

That's it! Super simple structure.

## Run the project:
```bash
npm run dev
```
