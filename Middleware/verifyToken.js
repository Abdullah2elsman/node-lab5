import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    let token = req.headers.token;

    jwt.verify(token, "iti", async (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "Unauthorized" })
        }
        req.user = decoded;
        next();
    })
}