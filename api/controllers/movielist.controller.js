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

export const findMovieList = async (req, res, next) => {
    const { id: idMovieList } = req.params;
  
    try {
      const movielist = await MovieList.findById(idMovieList);
      if (movielist) {
        req.data = { movielist };
        next();
      } else {
        req.status(204).json({ error: "No movielist" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  
export const updateMovieList = async (req, res) => {
    const movielistToUpdate = req.body;
    const { movielist } = req.data;
  
    try {
      MovieList.updateOne(movielist, movielistToUpdate, (error, updatedMovieList) => {
        if (!error) {
          res.status(200).json(updatedMovieList);
        } else res.status(500).send(error);
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };