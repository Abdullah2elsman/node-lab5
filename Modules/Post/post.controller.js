import { postModel } from "../../Database/Models/post.model.js";

export const getPosts = async (req, res) => {
    const posts = await postModel.find({ createdBy: req.user._id }).select(["title", "content"]).populate("createdBy", "name email")
    res.status(200).json({ message: "success", data: posts })
}

export const addPost = async (req, res) => {
    req.body.createdBy = req.user._id;
    let addPost = await postModel.insertMany(req.body)
    res.status(201).json({ message: "note created", data: addPost })
}