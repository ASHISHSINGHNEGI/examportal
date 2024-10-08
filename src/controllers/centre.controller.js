import asyncHandler from "../utils/asyncHandler.js";
import { Centre } from "../models/centre.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
const registerCentre = asyncHandler(async (req, res) => {
  const { centreCode, centreName, centreCity, centerState, centerCountry } =
    req.body;
  const newCentre = new Centre({
    centreCode,
    centreName,
    centreCity,
    centerState,
    centerCountry,
  });
  // create new entry and save it to the database
  const centre = await Centre.create(newCentre);
  const centreCreated = await centre.findById(centre._id);
  if (!centreCreated) {
    throw new ApiError(500, "Server Error, please try again later");
  }
  return res.status(201).json(new ApiResponse(200, centreCreated, "Success"));
});

export { registerCentre };
