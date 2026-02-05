import userModel from "../../Database/Models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import sendEmail from "../../Email/email.js";
const signup = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        let user = new userModel(req.body);
        let addUser = await user.save();

        let response = addUser.toObject();
        delete response.password;

        try {
            await sendEmail(req.body.email);
            res.status(201).json({
                message: "Success! Check your email to verify your account",
                data: response
            });
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            // User is created but email failed - still return success but mention email issue
            res.status(201).json({
                message: "Account created successfully, but verification email could not be sent. Please contact support.",
                data: response
            });
        }
    } catch (error) {
        res.status(400).json({ message: "Error", error: error.message });
    }
};

const signin = async (req, res) => {
    try {
        const { password } = req.body;
        const foundUser = req.user;
        let matchPass = bcrypt.compareSync(password, foundUser.password);
        if (matchPass) {
            if(!foundUser.isConfirmed){
                return res.status(403).json({message: "please check your email to confirm it"})
            }
            let token = jwt.sign({ _id: foundUser.id, role: foundUser.role, name: foundUser.name }, "iti");
            let response = foundUser.toObject();
            delete response.password;
            res.status(200).json({ message: "Welcome!", data: response, token: token });
        } else {
            res.status(401).json({ message: "Unauthenticated, Invalid password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    await user.deleteOne()
    res.status(200).json({ message: "user deleted successfully" })
}

const verifyAccount = async (req, res) => {
    const email = req.params.email;

    jwt.verify(email,"myEmail", async(error,decode)=>{
        if(error){
            return res.status(401).json({message: "Invalid Token"})
        }
        await userModel.findOneAndUpdate({email: decode}, {isConfirmed: true});
    })
    res.status(200).json({ message: "The email is verified now" })
}


export {
    signup,
    signin,
    deleteUser,
    verifyAccount
};