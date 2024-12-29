import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, // Prevent XSS Attacks Cross-Site Scripting Attacks
        sameSite: "strict", // Prevent CSRF Attacks Cross-Site Request Forgery Attacks 
        secure: process.env.NODE_ENV !== "development" 
    });

    return token;
}