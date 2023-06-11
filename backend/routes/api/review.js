const express = require('express');

const { Customer, Review } = require("../../db/models");

const router = express.Router();

router.get('/', async (req, res) => {
  const Reviews = await Review.findAll({
    include: [
      {
        model: Customer,
        attributes: ["id", "firstName", "lastName"]
      }
    ]
  });

  return res.json({ Reviews })
});

router.post('/', async (req, res) => {
  const { description } = req.body;

  const newReview = await Review.create({
    customerId: req.user.id, description
  });

  return res.json({ newReview });
});

module.exports = router;
