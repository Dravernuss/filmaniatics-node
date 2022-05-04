import express from "express";

import { userCtrl } from "../controllers/index.js";

import { isAuthenticated } from "../middlewares/index.js";

const {
  getAllUsers,
  createUser,
  getOneUser,
  findUser,
  updateUser,
  login,
  deleteUser,
} = userCtrl;

const router = express.Router();

const userRoutes = {
  GET_ALL_USERS: "/users",
  GET_ONE_USER: "/users/:id",
  CREATE: "/users/create",
  UPDATE: "/users/update/:id",
  DELETE: "/users/delete/:id",
  LOGIN: "/users/login",
};

router.get(userRoutes.GET_ALL_USERS, isAuthenticated, getAllUsers);
router.get(userRoutes.GET_ONE_USER, isAuthenticated, getOneUser);
router.post(userRoutes.CREATE, createUser);
router.put(userRoutes.UPDATE, isAuthenticated, findUser, updateUser);
router.delete(userRoutes.DELETE, isAuthenticated, deleteUser);
router.post(userRoutes.LOGIN, login);

export default router;
