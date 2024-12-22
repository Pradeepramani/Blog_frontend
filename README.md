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