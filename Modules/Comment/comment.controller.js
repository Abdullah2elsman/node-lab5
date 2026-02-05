import { commentModel } from "../../Database/Models/comment.model.js";

export const getComments = async (req, res) => {
    const comments = await commentModel.find({ createdBy: req.user._id }).select(["title", "content"]).populate("createdBy", "name email")
    res.status(200).json({ message: "success", data: comments })
}

export const addComment = async (req, res) => {
    req.body.createdBy = req.user._id;
    let addComments = await commentModel.insertMany(req.body)
    res.status(201).json({ message: "note created", data: addComments })
}