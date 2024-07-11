const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/.restaurant.Controller");

//create a resturant
router.post("/", restaurantController.create);
//post http://localhost:5000/api/v1/restuarants/
router,post("/", restaurantController.create);

//Get All restuarant
router.get("/", restaurantController.getAll);

//get  a restuarant by Id
router.get("/", restaurantController.getById)

module.exports = Router;

