
# 🌤️ Weather App

A weather application built using **React.js** and **OpenWeatherMap API**. It allows users to search for current weather conditions in any city, including temperature, humidity, wind speed, visibility, and air pressure.

## 🚀 Features

- 🔍 City search functionality
- 🌡️ Real-time temperature display
- 💧 Humidity and 💨 wind speed data
- 👁️ Visibility and 🌬️ air pressure
- 📸 Dynamic weather icons based on real-time data
- 🖼️ Clean and user-friendly UI
- ⌨️ Search by pressing Enter or clicking the search icon

## 🛠️ Tech Stack

- React.js (Hooks: `useState`, `useEffect`, `useRef`)
- OpenWeatherMap API
- CSS for custom styling
- Vite (for fast development environment)

## 📦 Installation

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm run dev
````

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your OpenWeather API key:

```
VITE_APP_ID=your_openweather_api_key
```

You can get a free API key from [OpenWeather](https://openweathermap.org/api).

## 📁 Project Structure

```
weather-app-using-react/
└── weather-app/
    ├── .env
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── README.md
    ├── vite.config.js
    ├── public/
    │   └── vite.svg
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        │   ├── clear.png
        │   ├── cloud.png
        │   ├── drizzle.png
        │   ├── humidity.png
        │   ├── pressure.png
        │   ├── rain.png
        │   ├── search.png
        │   ├── snow.png
        │   ├── visibility.png
        │   └── wind.png
        └── components/
            ├── Weather.css
            └── Weather.jsx
```

## 🎨 UI Preview
![image](https://github.com/user-attachments/assets/dcc1143d-a59e-45f6-a936-287b1c91aa02)




![image](https://github.com/user-attachments/assets/3c91772e-e8c7-4551-8f31-5676a66de343)






