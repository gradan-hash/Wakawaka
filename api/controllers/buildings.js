import Building from "../models/buildings.js";

export const createBuiding = async (req, res, next) => {
  // console.log(req.body);

  const newBuilding = await Building.create({
    ...req.body,
  });

  res.json(newBuilding);

  // console.log(newBuilding);
};

export const getBuildings = async (req, res, next) => {
  const buildings = await Building.find().sort({ updatedAt: "-1" });
  res.status(200).json({
    properties: buildings,
  });
};

export const getSingleBuilding = async (req, res) => {
  const property = await Building.findById(req.params.id);

  if (property) {
    return res.status(200).json({
      property,
    });
  } else {
    res.status(404).send("Property not found");
  }
};
