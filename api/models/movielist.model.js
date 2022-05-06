import mongoose from "mongoose";

const { Schema } = mongoose;

const favMovies = new Schema({
  title: {type:String, default:""},
  movie_id: {type:String, default:""}
});

// schema MovieList
const schemaMovieList = {
  user_id: String,
  movies_watched: { type: Array, default: [] },
  fav_movies: {type:[favMovies], default:[]},
  total_movies: {type:Number, default:0}
};

// MovieList model
const MovieList = mongoose.model("MovieList", schemaMovieList, "movielist");

export default MovieList;
