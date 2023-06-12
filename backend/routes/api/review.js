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
    customerId: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    description
  });

  return res.json({ newReview });
});

router.put('/:reviewId', async (req, res) => {
  const { description } = req.body;
  const reviewId = Number(req.params.reviewId)
  const review = await Review.findByPk(reviewId);

  if (review) {
    review.description = description;

    await review.save();
    return res.json(review);
  };
});

router.delete('/:reviewId', async (req, res) => {
  const reviewId = Number(req.params.reviewId)
  const review = await Review.findByPk(reviewId);

  if (review) {
    const delReview = await Review.findOne({
      where: {
        id: reviewId
      }
    });

    await delReview.destroy();
    return res.json(review);
  };
});

module.exports = router;
