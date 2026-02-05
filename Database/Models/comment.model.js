import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,

    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }
}, {
    timestamps: true,
    versionKey: false
})

export const commentModel = mongoose.model("Comment", commentSchema)