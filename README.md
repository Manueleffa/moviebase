# MovieBase — Movie Database App

> ALX Frontend Development Program — Capstone Project

MovieBase is a responsive movie database web application built with React and Tailwind CSS. It allows users to browse curated movie categories, search for any movie, and view detailed information about individual films — all powered by the [OMDB API](https://www.omdbapi.com/).

---

## Live Demo

🔗 [View Deployed App](https://moviebase-lake.vercel.app/)

---

## Features

- **Browse by Category** — Curated lists of Popular, Action, Comedy, and TV Show titles displayed on dedicated pages
- **Movie Search** — Search any movie by title and get real-time results from the OMDB API
- **Movie Details** — Click any movie to view its full details including plot, cast, genre, director, release date, and IMDb rating
- **Responsive Design** — Fully responsive layout that adapts to desktop, tablet, and mobile screens
- **Mobile Sidebar** — Collapsible sidebar with smooth slide-in animation on mobile, triggered by a hamburger menu
- **Error Handling** — User-friendly messages for failed searches, broken poster images, and invalid API responses

---

## Tech Stack

| Technology      | Purpose                                     |
| --------------- | ------------------------------------------- |
| React 18        | UI library and component architecture       |
| Vite            | Build tool and development server           |
| React Router v6 | Client-side routing and navigation          |
| Tailwind CSS    | Utility-first styling and responsive design |
| OMDB API        | Movie data source                           |
| React Icons     | Icon library (Font Awesome)                 |

---

## Project Structure

```
src/
├── assets/          # Static assets (placeholder image)
├── components/      # Reusable UI components
│   ├── Card.jsx         # Individual movie card
│   ├── Cards.jsx        # Movie grid (handles fetching)
│   ├── LayoutContainer.jsx
│   ├── MainArea.jsx
│   ├── Sidebar.jsx
│   └── Topbar.jsx       # Search bar + page title
├── data/
│   └── movieLists.js    # Curated IMDb ID lists per category
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ActionPage.jsx
│   ├── ComedyPage.jsx
│   ├── TvShowsPage.jsx
│   ├── MovieDetailsPage.jsx
│   ├── SearchPage.jsx
│   └── NotFoundPage.jsx
└── utilities/
    └── omdb.js          # API helper functions
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- An OMDB API key — get one free at [omdbapi.com](https://www.omdbapi.com/apikey.aspx)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Manueleffa/moviebase.git
cd moviebase
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root of the project:

```
VITE_OMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## API Integration

This app uses the [OMDB API](https://www.omdbapi.com/). Two endpoints are used:

- `?s=query` — Search for movies by keyword (used on the Search page)
- `?i=imdbID&plot=full` — Fetch full details for a single movie by IMDb ID (used on the Movie Details page)

Category pages use curated IMDb ID lists stored in `src/data/movieLists.js`, fetched individually using the `?i=` endpoint.

---

## Deployment

The app is deployed on [Vercel](https://vercel.com/) and accessible at [https://moviebase-lake.vercel.app/](https://moviebase-lake.vercel.app/).

To build for production:

```bash
npm run build
```

> **Note:** Make sure to add your `VITE_OMDB_API_KEY` as an environment variable in your hosting platform's dashboard. Never commit your `.env` file.

---

## Acknowledgements

- [OMDB API](https://www.omdbapi.com/) for providing free movie data
- [ALX Africa](https://www.alxafrica.com/) for the Frontend Development Program
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
