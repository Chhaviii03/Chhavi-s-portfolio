# Customization Guide

## Adding Your Profile Image

1. Place your profile image in `frontend/src/assets/` (create the folder if needed)
2. Update `frontend/src/sections/About.jsx`:

   Find this section:
   ```jsx
   <div className="w-full h-full bg-gradient-to-br from-pink-primary/10 to-black-bg flex items-center justify-center">
     <span className="text-6xl md:text-8xl font-bold text-pink-primary/30">CB</span>
   </div>
   ```

   Replace with:
   ```jsx
   <img 
     src="/src/assets/profile.jpg" 
     alt="Chhavi Bhatt" 
     className="w-full h-full object-cover"
   />
   ```

## Updating Project Links

Edit `frontend/src/sections/Projects.jsx` and update the `github` and `demo` URLs for each project.

## Adding More Projects

Add new objects to the `projects` array in `frontend/src/sections/Projects.jsx`:

```jsx
{
  title: 'Your Project Name',
  description: 'Project description...',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://your-demo-url.com',
}
```

## Customizing Colors

Edit `frontend/tailwind.config.js` to change the color scheme:

```js
colors: {
  'pink-primary': '#ff4d8d',  // Change this to your preferred pink
  'black-bg': '#000000',
  // ... other colors
}
```

## Adding More Skills

Edit `frontend/src/sections/TechnicalSkills.jsx` and add to the `skills` array. Use icons from `react-icons`:

```jsx
import { SiYourIcon } from 'react-icons/si'

{ name: 'Your Skill', Icon: SiYourIcon }
```

## Modifying Content

- **About Section:** `frontend/src/sections/About.jsx`
- **Projects:** `frontend/src/sections/Projects.jsx`
- **Achievements:** `frontend/src/sections/Achievements.jsx`
- **Contact Form:** `frontend/src/sections/ContactMe.jsx`

## Changing Fonts

Update `frontend/index.html` to use different Google Fonts, then update `frontend/tailwind.config.js`:

```js
fontFamily: {
  'heading': ['YourFont', 'sans-serif'],
  'body': ['YourFont', 'sans-serif'],
}
```



