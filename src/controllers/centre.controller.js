import asyncHandler from "../utils/asyncHandler.js";
import { Centre } from "../models/centre.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerCentre = asyncHandler(async (req, res) => {
  const { centreCode, centreName, centreCity, centreState, centreCountry } =
    req.body;
  console.log("centre form request recieved. \ndata : ", req.body);
  //check for the duplicate data using centreCode
  const duplicateData = await Centre.find({ centreCode: req.body.centreCode });
  if (duplicateData) {
    return res.status(406).json(new ApiResponse(406, req.body, `${centreCode} is already present in the database`));
  }
  else {
    const newCentre = new Centre({
      centreCode,
      centreName,
      centreCity,
      centreState,
      centreCountry,
    });
    // create new entry and save it to the database
    const centre = await Centre.create(newCentre);
    console.log("new centre record is stored with ID: ", centre._id);
    if (!centreCreated._id) {
      throw new ApiError(500, "Server Error, please try again later");
    }
    return res.status(201).json(new ApiResponse(200, centreCreated, "Success"));
  }
});


export { registerCentre };
