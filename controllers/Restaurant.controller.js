const Restaurant = require("../models/restaurant.model");

// Create and save a new Restaurant
exports.create = async (req, res) => {
  const { name, rtype, img } = req.body;

  if (!name || !rtype || !img) {
    return res
      .status(400)
      .send({ message: "Name, Type or ImageUrl cannot be empty!" });
  }

  const restaurant = await Restaurant.findOne({ where: { name: name } });
  if (restaurant) {
    return res.status(400).send({ message: "Restaurant already exists!" });
  }

  const newRestaurant = { name, rtype, img };
  try {
    const data = await Restaurant.create(newRestaurant);
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({
        message:
          error.message ||
          "Something error occurred while creating the restaurant.",
      });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Restaurant.findAll();
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Something error occurred." });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Restaurant.findByPk(id);
    if (!data) {
      return res
        .status(404)
        .send({ message: "Not found Restaurant with id " + id });
    }
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Something error occurred." });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  await Restaurant.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Restaurant was update successfully" });
      } else {
        res.send({
          message:
            "Cannot update restaurant with id" +
            id +
            ". Maybe restaurant was not found or res.body is empty!",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.massage ||
          "Somthing error occured while creating the restaurant.",
      });
    });
};

// Delete
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Restaurant.destroy({
      where: { id: id },
    });

    if (num === 1) {
      res.send({ message: "Restaurant was deleted successfully" });
    } else {
      res.send({
        message: "Cannot delete restaurant with id=" + id + ".",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error deleting restaurant with id=" + id,
      error: error.message,
    });
  }
};
