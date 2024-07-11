const Restaurant = require("../models/restaurant.model");

//Create and save a new Restaurant
exports.create = async (req, res) => {
    console.log(req.body);
  const { name, type, imageUrl } = req.body;
  
  //Validate data
  if (!name || !type || !imageUrl) {
    res.status(400).send({
      message: "Name, Type or ImageUrl can not be empty!",
    });
    return;
  }

  await Restaurant.findOne({ where: { name: name } }).then((restaurant) => {
    if (restaurant) {
      res.status(400).send({
        message: " Restaurant already exists! ",
      });
      return;
    }
    // create a restaurant
    const newRestaurant = {
      name: name,
      type: type,
      imageUrl: imageUrl,
    };
    Restaurant.create(newRestaurant)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Something error occured while creating the restaurant.",
        });
      });
  });
};

//
   

//Get all restaurant

exports.getAll = async(req,res) =>{
    await Restaurant.findAll().then((data)=>{
        res.send(data)
    }).catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Something error occured while creating the restaurant.",
        });
    })
}


//Get byID Restaurant
exports.get = async (req, res) => {
  await Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occured while creating the restaurant.",
      });
    });
};







//Update a restuarant
export.Update = asy