import { MovieList } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Controller get all MovieList
export const getAllMovieList = async (request, response) => {
  try {
    const movielist = await MovieList.find();
    if (movielist.length === 0) response.status(204).send();
    else response.status(200).json(movielist);
  } catch (error) {
    response.status(500).json({ error });
  }
};

// Controller get one MovieList by id
export const getOneMovieList = async (req, res) => {
  const { id: idMovieList } = req.params;
  const movieList = await MovieList.findById(idMovieList);
  res.json(movieList);
};

// Controller create MovieList
export const createMovieList = async (req, res) => {
  try {
    const { id: user_id } = req.params;
    const movieList = new MovieList({ ...req.body, user_id });
    const newMovieList = await movieList.save();
    newMovieList && res.status(201).json(newMovieList);
  } catch (error) {
    response.status(500).json({ error });
  }
};

// Controller add movie to movielist
export const addMovieToMovieList = async (req, res) => {
  const { id: idMovieList } = req.params;
  const movieIdtoAdd = req.body;
  try {
    const listFound = await MovieList.findById(idMovieList);
    if (listFound) {
      listFound.total_movies = listFound.total_movies + 1;
      listFound.movies_watched.push(movieIdtoAdd);
      MovieList.updateOne(
        { _id: listFound._id },
        listFound,
        (error, updatedMovieList) => {
          if (!error) {
            res.status(200).json(updatedMovieList);
          } else res.status(500).send(error);
        }
      );
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Controller remove movie to movielist (id movie_watched)
export const removeMovieToMovieList = async (req, res) => {
  const { idList: idMovieList, idMovie: idMovie } = req.params;
  try {
    const listFound = await MovieList.findById(idMovieList);

    await listFound.updateOne(
      { _id: idMovieList },
      { $pull: { movies_watched: { movie_id: idMovie } } }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addFavoriteMovieToMovieList = async (req, res) => {
  const { id: idMovieList } = req.params;
  const favoriteMovieIdtoAdd = req.body;
  try {
    const listFound = await MovieList.findById(idMovieList);
    if (listFound) {
      listFound.fav_movies.push(favoriteMovieIdtoAdd);
      MovieList.updateOne(
        { _id: listFound._id },
        listFound,
        (error, updatedMovieList) => {
          if (!error) {
            res.status(200).json(updatedMovieList);
          } else res.status(500).send(error);
        }
      );
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
