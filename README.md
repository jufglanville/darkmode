# Dark Theme Mode

## Description

A simple solution for creating a dark theme toggle button for your website.

This project uses React and Styled Components. It also uses the Context API to manage the state of the theme.

## How it works

- The styles are added in the `src/styled/theme.ts` file.
- These are then passed as variables to the `src/context/ThemeContext.tsx` file.
- This Provider is wrapped around the `App` component in the `main.tsx` file.
- The Provider is consumed in the `src/components/DarkModeToggle/DarkModeToggle.tsx` file.
- Each component can then access the `theme` object and use the variables to style in their corresponding `Sc...` file.

## How to use

- Clone the repo
- Run `npm install`
- Run `npm run dev`
