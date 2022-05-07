import mongoose from "mongoose";

const { Schema } = mongoose;

const movWatched = new Schema({
  movie_id: String,
});

const favMovies = new Schema({
  fav_id: String,
});

// schema MovieList
const schemaMovieList = {
  user_id: String,
  movies_watched: [movWatched],
  fav_movies: [favMovies],
  total_movies: { type: Number, default: 0 },
};

// MovieList model
const MovieList = mongoose.model("MovieList", schemaMovieList, "movielist");

export default MovieList;
