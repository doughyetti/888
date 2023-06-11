import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as reviewActions from "../../store/review";
import "./Reviews.css"

const UpdateReviewModal = (review) => {
  const dispatch = useDispatch();

  let { id, description } = review.review;

  const [updateDescription, setUpdateDescription] = useState(description);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const review =  { id: id, description: updateDescription }

    return dispatch(reviewActions.updateReviewThunk(review))
      .then(window.location.reload())
      .catch(async (res) => {
      const data = await res.json();

      if (data && data.errors) setErrors(data.errors);
    })
  };

  return (
    <div className="review-modal-container">

      <div className="review-img-container">
        <i className="fa-solid fa-clipboard-check"></i>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="review-form-container">

          <textarea
            type="text"
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
            required
          ></textarea>

          <button className="review-form-btn" type="submit">Give Feedback</button>

        </div>
      </form>

    </div>
  )
};

export default UpdateReviewModal;
