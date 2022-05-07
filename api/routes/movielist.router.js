import express from "express";

import { movielistCtrl } from "../controllers/index.js";

import { isAuthenticated } from "../middlewares/index.js";

const {
  getAllMovieList,
  getOneMovieList,
  createMovieList,
  addMovieToMovieList,
  addFavoriteMovieToMovieList,
  removeMovieToMovieList,
  removeFavoriteMovieToMovieList,
} = movielistCtrl;

const router = express.Router();

const movielistRoutes = {
  GET_ALL_MOVIELISTS: "/movielist",
  GET_ONE_MOVIELIST: "/movielist/:id",
  CREATE: "/movielist/create/:id",
  ADD_MOVIE_TO_LIST: "/movielist/addMovieToList/:id",
  REMOVE_MOVIE_TO_LIST: "/movielist/removeMovieToList/:idList/:idMovie",
  ADD_FAVORITE_MOVIE_TO_LIST: "/movielist/addFavoriteMovieToList/:id",
  REMOVE_FAV_MOVIE_TO_LIST:
    "/movielist/removeFavoriteMovieToList/:idList/:idMovie",
};

router.get(
  movielistRoutes.GET_ALL_MOVIELISTS,
  isAuthenticated,
  getAllMovieList
);
router.get(movielistRoutes.GET_ONE_MOVIELIST, isAuthenticated, getOneMovieList);
router.post(movielistRoutes.CREATE, createMovieList);
router.put(
  movielistRoutes.ADD_MOVIE_TO_LIST,
  isAuthenticated,
  addMovieToMovieList
);
router.put(
  movielistRoutes.ADD_FAVORITE_MOVIE_TO_LIST,
  isAuthenticated,
  addFavoriteMovieToMovieList
);
router.put(
  movielistRoutes.REMOVE_MOVIE_TO_LIST,
  isAuthenticated,
  removeMovieToMovieList
);
router.put(
  movielistRoutes.REMOVE_FAV_MOVIE_TO_LIST,
  isAuthenticated,
  removeFavoriteMovieToMovieList
);

export default router;
