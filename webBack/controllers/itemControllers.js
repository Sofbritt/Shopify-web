const { Item, User } = require("../models/model");

const itemCreate = async (req, res) => {
  try {
    const item1 = new Item(req.body);
    await item1.save();
    res.status(200).json(item1);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const getItems = async (req, res) => {
  try {
    let limit = req.query.limit || 50;
    const getItem1 = await Item.find({ category: req.query.category }).limit(
      limit
    );

    res.status(200).json(getItem1);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const getOneItem = async (req, res) => {
  try {
    const getOneItem = await Item.findById(req.params.id);
    res.status(200).json(getOneItem);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const addBasket = async (req, res) => {
  try {
    let user = await User.findById(req.params.userId);
    if (!user.basket.includes(req.params.itemId)) {
      user.basket.push(req.params.itemId);
    }
    await user.save();
    res.status(200).json({ message: "ok" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
};

const getBasket = async (req, res) => {
  try {
    let user = await User.findById(req.params.userId).populate("basket");
    res.status(200).json(user.basket);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const removeItem = async (req, res) => {
  try {
    let user = await User.findById(req.params.userId).populate("basket");
    user.basket.pull(req.params.itemId);
    await user.save();
    res.status(200).json(user.basket);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const search = async (req, res) => {
  try {
    const item = await Item.findOne({title : req.query.q });
    console.log(req.query.q);
    res.status(200).json(item.id)
  } catch (e) {
    res.status(400).json({ message: e.message });

  }
};

module.exports = {
  itemCreate,
  getOneItem,
  getItems,
  addBasket,
  getBasket,
  removeItem,
  search,
};
