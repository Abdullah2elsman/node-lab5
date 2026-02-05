import { noteModel } from "../../Database/Models/note.model.js";

export const createNote = async (req, res) => {
    req.body.createdBy = req.user._id;
    let addNote = await noteModel.insertMany(req.body)
    res.status(201).json({ message: "note created", data: addNote })
}

export const getNotes = async (req, res) => {
    const notes = await noteModel.find({createdBy: req.user._id}).select(["title", "content"]).populate("createdBy", "name email")
    res.status(200).json({ message: "success", data: notes })
}

export const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedNote = await noteModel.findOneAndDelete({ _id: id, createdBy: req.user._id });
        
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found or you are not the owner" });
        }
        
        res.status(200).json({ message: "note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}