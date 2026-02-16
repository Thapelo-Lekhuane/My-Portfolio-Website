# Thapelo Lekhuane - Portfolio Mobile App

React Native (Expo) mobile version of the portfolio website.

**Device detection:** The main site (index.html) automatically redirects mobile users (screen ≤768px or mobile user agent) to this app. Desktop users see the full web version.

## Features

- **Home** - Hero section with intro
- **About** - Bio, skills with animated progress bars
- **Work** - Experience, Projects, Services (nested navigation)
- **Hustles** - Business ventures timeline
- **Contact** - Contact info, social links, message form (Formspree)

## Build for Web (for mobile redirect)

Before deploying, build the web version so mobile users get redirected correctly:

```bash
npm run build:web
```

This outputs to `dist/`. Ensure `mobile/dist/` is deployed with your site.

## Run the App

```bash
# Install dependencies (if not done)
npm install

# Start Expo
npm start

# Run on Android
npm run android

# Run on iOS (Mac only)
npm run ios

# Run in web browser
npm run web
```

## Project Structure

```
mobile/
├── App.js                 # Main app with navigation
├── src/
│   ├── constants/theme.js  # Colors, spacing, fonts
│   ├── data/portfolio.js  # Portfolio content
│   └── screens/           # All screens
├── assets/
│   └── img/              # Portfolio images
└── package.json
```

## Tech Stack

- React Native (Expo)
- React Navigation (Bottom Tabs + Stack)
- Expo Vector Icons
