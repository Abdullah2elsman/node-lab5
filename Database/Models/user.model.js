import mongoose from "mongoose";
import { noteModel } from "./note.model.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: false
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 80
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },



},
    {
        autoIndex: true,
        timestamps: true,
        versionKey: false
    });
userSchema.pre("deleteOne", { document: true }, async function () {
    await noteModel.deleteMany({ createdBy: this._id });
})
const userModel = mongoose.model("User", userSchema);
export default userModel