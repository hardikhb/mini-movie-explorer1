# 🎬 Mini Movie Explorer

**Mini Movie Explorer** is a sleek, responsive React app that allows users to search for movies using the [OMDb API](https://www.omdbapi.com/), explore details, and build their own personal watchlist.

This project demonstrates modern front-end practices including debounced search, state persistence via localStorage, theming with dark mode, and UI modularity with reusable components.

---

## ✨ Features

- 🔍 **Live Movie Search with Debounce** – No unnecessary API spam; searches trigger only after the user pauses typing.
- 🎬 **Movie Detail Modal** – Click any movie card to see full details like plot, cast, ratings, etc.
- ⭐ **Watchlist Functionality** – Add movies to a watchlist that persists using localStorage.
- 🌗 **Dark/Light Mode Toggle** – Switch themes on the fly with a single click.
- 📱 **Mobile-Responsive Layout** – Clean and readable across all screen sizes.
- ⚡ **Fast Development with Vite** – Blazing fast bundling and hot reloads.

---

## 🚀 Live Demo

🌐 [View Deployed App on Vercel](https://mini-movie-explorer-three.vercel.app/)

---

## 🛠 Tech Stack

- **Frontend:** React, JavaScript (ES6+), Vite
- **Styling:** Custom CSS Modules with CSS variables for theming
- **API:** OMDb (Open Movie Database)
- **Hosting:** Vercel

---

## 📦 Getting Started Locally



### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your OMDb API Key
Create a `.env` file in the root of the project:
```env
VITE_OMDB_API_KEY=your_omdb_api_key_here
```







