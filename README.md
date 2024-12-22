# lms front end

1 => Clone the project
''''''''''''
git clone https://github.com/Pradeepramani/Blog_frontend.git
''''''''''''''''''''''''''''
2=> Add dependies

'''''''''''''''''''''''''
npm install
''''''''''''''''''''''''''

3=> Run the application

'''''''''''''''''''''
npm run dev
'''''''''''''''''''

# TAIL WIND (LINK=>https://tailwindcss.com/docs/guides/vite)

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# ADD THE TAILWIND CONTENT PROPERTY 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  # Import tail wind css

@tailwind base;
@tailwind components;
@tailwind utilities;


# Installed packages 

Installed Packages

Below are the libraries installed for this project and their purpose:

=========================================
npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast tailwindcss line-clamp

=========================================
State Management
@reduxjs/toolkit

Official Redux library for state management.
Simplifies Redux usage with tools like createSlice and createAsyncThunk.
Helps manage complex state logic in a predictable way.
react-redux

React bindings for Redux.
Provides the Provider component to connect React components with the Redux store.
Includes hooks like useSelector and useDispatch for accessing and updating state.
Routing
react-router-dom
Enables client-side routing in React applications.
Provides components like BrowserRouter, Route, and Link for navigating between pages without reloading.
UI Components and Styling
react-icons

Library for adding scalable vector icons from popular icon packs (e.g., Font Awesome, Material Design).
Icons are used as React components for easy customization.
tailwindcss

Utility-first CSS framework for designing modern, responsive user interfaces.
Speeds up UI development with pre-defined classes.
daisyui

A Tailwind CSS plugin for pre-styled and accessible UI components.
Includes components like buttons, modals, and cards that can be customized with Tailwind.
@tailwindcss/line-clamp

A Tailwind CSS plugin for truncating text after a specified number of lines.
Useful for displaying clean, truncated text with ellipsis in UIs.
Charts and Visualizations
react-chartjs-2

React wrapper for Chart.js, making it easy to integrate interactive charts into React applications.
chart.js

JavaScript library for creating customizable and responsive charts like bar, pie, and line charts.
Works as the core library for react-chartjs-2.
HTTP Requests
axios
Promise-based HTTP client for making API requests.
Supports GET, POST, PUT, DELETE, and other HTTP methods.
Provides error handling and interceptors for managing requests globally.
Notifications
react-hot-toast
Lightweight notification library for React.
Displays toast notifications for success, error, or information messages.
Easy to integrate and highly customizable.




=============================

plugin to sort the import

npm i eslint-plugin-simple-import-sort