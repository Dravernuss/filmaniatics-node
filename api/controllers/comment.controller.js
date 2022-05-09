import { Comment, User } from "../models/index.js";

// Controller get All Comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    if (comments.length === 0) res.status(204).send();
    else res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Controller get Comment by MovieId
export const getCommentsByMovieId = async (req, res) => {
  try {
    const { id: idMovie } = req.params;
    const comments = await Comment.find({ movie_id: idMovie });
    res.json(comments);
  } catch (error) {
    res.status(403).json({ error });
  }
};

// Controller get Comment by UserId
export const getCommentsByUserId = async (req, res) => {
  try {
    const { id: idUser } = req.params;
    const comments = await Comment.find({ user_id: idUser });
    res.json(comments);
  } catch (error) {
    res.status(403).json({ error });
  }
};

// Controller get one Comment
export const getOneComment = async (req, res) => {
  try {
    const { id: idComment } = req.params;
    const comment = await Comment.findOne({ _id: idComment });
    res.json(comment);
  } catch (error) {
    res.status(403).json({ error });
  }
};

// Controller create Comments
export const createComment = async (req, res) => {
  try {
    const { idUser: user_id, idMovie: movie_id } = req.params;
    const user = await User.findById(user_id);
    user.total_comments++;
    await User.updateOne(
      { _id: user_id },
      { total_comments: Number(user.total_comments++) }
    );
    const comment = new Comment({ ...req.body, user_id, movie_id });
    const newComment = await comment.save();
    newComment && res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Controller delete Comment
export const deleteComment = async (req, res) => {
  const { id: idComment } = req.params;
  try {
    const commentToDelete = await Comment.findById(idComment);
    if (!commentToDelete) {
      res.status(204).send({ err: "No comment to delete" });
    } else {
      const user = await User.findById(commentToDelete.user_id);
      user.total_comments--;
      await User.updateOne(
        { _id: commentToDelete.user_id },
        { total_comments: Number(user.total_comments--) }
      );
      const deletedComment = await Comment.deleteOne(commentToDelete);
      if (deletedComment) res.status(200).json(deletedComment);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
