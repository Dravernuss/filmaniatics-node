import { MovieList } from "../models/index.js";

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

// Controller get one MovieList by user_id
export const getOneMovieList = async (req, res) => {
  const { id: user_id } = req.params;
  const movieList = await MovieList.findOne({ user_id: user_id });
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
      if (
        listFound.movies_watched.map((i) => {
          if (movieIdtoAdd.movie_id === i) throw new Error();
        })
      )
        listFound.movies_watched.push(movieIdtoAdd.movie_id);
      listFound.total_movies = listFound.movies_watched.length;
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
    res.status(500).send({ message: "movie_id already in list" });
  }
};

// Controller remove movie to movielist (id movie_watched)
export const removeMovieToMovieList = async (req, res) => {
  const { idList: idMovieList, idMovie: idMovie } = req.params;
  try {
    const listFound = await MovieList.findById(idMovieList);
    if (listFound) {
      listFound.movies_watched.map((i, index) => {
        if (i === Number(idMovie)) {
          listFound.movies_watched.splice(index, 1);
        }
      });
      listFound.total_movies = listFound.movies_watched.length;
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

// Controller add fav_movie to movielist
export const addFavoriteMovieToMovieList = async (req, res) => {
  const { id: idMovieList } = req.params;
  const favoriteMovieIdtoAdd = req.body;
  try {
    const listFound = await MovieList.findById(idMovieList);
    if (listFound) {
      if (
        listFound.fav_movies.map((i) => {
          if (favoriteMovieIdtoAdd.fav_id === i) throw new Error();
        })
      )
        listFound.fav_movies.push(favoriteMovieIdtoAdd.fav_id);
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
    res.status(500).send({ message: "fav_id already in list" });
  }
};

// Controller remove fav_movie to movielist (id movie_watched)
export const removeFavoriteMovieToMovieList = async (req, res) => {
  const { idList: idMovieList, idMovie: idFavMovie } = req.params;
  try {
    const listFound = await MovieList.findById(idMovieList);
    if (listFound) {
      listFound.fav_movies.map((i, index) => {
        if (i === Number(idFavMovie)) listFound.fav_movies.splice(index, 1);
      });
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
