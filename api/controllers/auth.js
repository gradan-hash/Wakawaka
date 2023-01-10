import User from "../models/users.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

import {OAuth2Client} from "google-auth-library"

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      userType:"tenant",
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError( "Wrong password or username!",400));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails,token}, isAdmin });
  } catch (err) {
    next(err);
  }
};


const client = new OAuth2Client(GoogleClie

export async function verifyGoogleToken(req, res) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: req.body.access_token,
      audience: GoogleClientId,
    });
    const payload = ticket.getPayload();
    const userId = payload['sub'];

    // The user's identity has been verified.
    // You can now create a session for the user.
    res.send({ success: true });
  } catch (error) {
    console.error(error);
    res.send({ success: false });
  }
}

