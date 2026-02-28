import { useState } from "react";
import "./App.css";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ActionPage from "./pages/ActionPage";
import ComedyPage from "./pages/ComedyPage";
import TvShowsPage from "./pages/TvShowsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="action" element={<ActionPage />} />
      <Route path="comedy" element={<ComedyPage />} />
      <Route path="tvshows" element={<TvShowsPage />} />
      <Route path="moviedetails/:imdbID" element={<MovieDetailsPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
