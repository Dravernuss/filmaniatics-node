import mongoose from "mongoose";

const { Schema } = mongoose;

const favMovies = new Schema({
  title: String,
  movie_id: String,
});

// schema MovieList
const schemaMovieList = {
  user_id: String,
  movies_watched: { type: Array, default: [] },
  fav_movies: [favMovies],
  total_movies: Number,
};

// MovieList model
const MovieList = mongoose.model("MovieList", schemaMovieList, "movielist");

export default MovieList;
