import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // time in ms
    httpOnly: true, // prevent XSS (cross-site scripting) attacks
    sameSite: "strict", // CSRF (cross-site request forgery) attacks
    secure: process.env.NODE_ENV !== "developement"
  });
};

export default generateTokenAndSetCookie;