import express from "express";

import { movielistCtrl } from "../controllers/index.js";

const {
  getAllMovieList,
  getOneMovieList,
  createMovieList,
  addMovieToMovieList,
  addFavoriteMovieToMovieList,
  removeMovieToMovieList,
} = movielistCtrl;

const router = express.Router();

const movielistRoutes = {
  GET_ALL_MOVIELISTS: "/movielist",
  GET_ONE_MOVIELIST: "/movielist/:id",
  CREATE: "/movielist/create/:id",
  ADD_MOVIE_TO_LIST: "/movielist/addMovieToList/:id",
  REMOVE_MOVIE_TO_LIST: "/movielist/removeMovieToList/:idList/:idMovie",
  ADD_FAVORITE_MOVIE_TO_LIST: "/movielist/addFavoriteMovieToList/:id",
  DELETE: "/movielist/delete/:id",
};

router.get(movielistRoutes.GET_ALL_MOVIELISTS, getAllMovieList);
router.get(movielistRoutes.GET_ONE_MOVIELIST, getOneMovieList);
router.post(movielistRoutes.CREATE, createMovieList);
router.put(movielistRoutes.ADD_MOVIE_TO_LIST, addMovieToMovieList);
router.put(
  movielistRoutes.ADD_FAVORITE_MOVIE_TO_LIST,
  addFavoriteMovieToMovieList
);
router.put(movielistRoutes.REMOVE_MOVIE_TO_LIST, removeMovieToMovieList);
router.delete(movielistRoutes.DELETE);

export default router;
