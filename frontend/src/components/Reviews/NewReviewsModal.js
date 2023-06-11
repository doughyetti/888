import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from "../../store/review";
import "./Reviews.css"

const NewReviewModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session)

  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const review =  { customerId: user.id, description }

    return dispatch(reviewActions.newReviewThunk(review))
      .then(window.location.reload())
      .catch(async (res) => {
      const data = await res.json();

      if (data && data.errors) setErrors(data.errors);
    })
  };

  return (
    <div className="review-modal-container">

      <div className="review-img-container">
        <i className="fa-regular fa-clipboard"></i>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="review-form-container">

          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What do you think about us?"
            required
          ></textarea>

          <button className="review-form-btn" type="submit">Give Feedback</button>

        </div>
      </form>

    </div>
  )
};

export default NewReviewModal;
