import asyncHandler from "../utils/asyncHandler.js";
import { Centre } from "../models/centre.models.js";
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

  res.status(200).json({
    ...newCentre,
  });
});

export { registerCentre };
