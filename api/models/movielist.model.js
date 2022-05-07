import mongoose from "mongoose";

const { Schema } = mongoose;

// schema MovieList
const schemaMovieList = {
  user_id: String,
  movies_watched: Array,
  fav_movies: Array,
  total_movies: { type: Number, default: 0 },
};

// MovieList model
const MovieList = mongoose.model("MovieList", schemaMovieList, "movielist");

export default MovieList;
