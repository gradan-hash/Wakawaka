import requests from "../models/requests.js";


export const savemessages = async (req, res, next) => {
  try {
    const newmessage = await requests.create({
      ...req.body,
    });
    res.status(200).json(newmessage);
  } catch (error) {
    next(error)
  }
};
