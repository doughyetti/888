const express = require('express');

const { Menu, Item } = require("../../db/models");

const router = express.Router();

router.get('/', async (req, res) => {
  const Menus = await Menu.findAll({
    include: [
      {
        model: Item,
        attributes: ["id", "menuId", "name", "description", "previewPhoto", "price"]
      }
    ]
  });

  return res.json({ Menus });
});

module.exports = router;
