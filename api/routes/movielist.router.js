import express from "express";

import { movielistCtrl } from "../controllers/index.js";

const {
    getAllMovieList,
    getOneMovieList,
    createMovieList
  } = movielistCtrl;

const router = express.Router();

const userRoutes = {
  GET_ALL_MOVIELISTS: "/movielist",
  GET_ONE_MOVIELIST: "/movielist/:id",
  CREATE: "/movielist/create/:id",
  UPDATE: "/movielist/update/:id",
  DELETE: "/movielist/delete/:id",
};

router.get(userRoutes.GET_ALL_MOVIELISTS, getAllMovieList);
router.get(userRoutes.GET_ONE_MOVIELIST, getOneMovieList);
router.post(userRoutes.CREATE, createMovieList);
router.put(userRoutes.UPDATE);
router.delete(userRoutes.DELETE);


export default router;
