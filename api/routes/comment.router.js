import express from "express";

import { commentCtrl } from "../controllers/index.js";

import { isAuthenticated } from "../middlewares/index.js";

const {
  getAllComments,
  getCommentsByMovieId,
  getCommentsByUserId,
  getOneComment,
  createComment,
  deleteComment,
} = commentCtrl;

const router = express.Router();

const commentRoutes = {
  GET_ALL_COMMENTS: "/comment",
  GET_ALL_COMMENTS_BY_MOVIEID: "/comment/all/:id",
  GET_ALL_COMMENTS_BY_USER: "/comment/user/:id",
  GET_ONE_COMMENTS: "/comment/:id",
  CREATE: "/comment/create/:idUser/:idMovie",
  DELETE: "/comment/delete/:id",
};

router.get(commentRoutes.GET_ALL_COMMENTS, isAuthenticated, getAllComments);
router.get(
  commentRoutes.GET_ALL_COMMENTS_BY_MOVIEID,
  isAuthenticated,
  getCommentsByMovieId
);
router.get(
  commentRoutes.GET_ALL_COMMENTS_BY_USER,
  isAuthenticated,
  getCommentsByUserId
);
router.get(commentRoutes.GET_ONE_COMMENTS, isAuthenticated, getOneComment);
router.post(commentRoutes.CREATE, isAuthenticated, createComment);
router.delete(commentRoutes.DELETE, isAuthenticated, deleteComment);

export default router;
