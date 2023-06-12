import { Parallax } from "react-parallax"
import { Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from "../../store/review";
import { useModal } from "../../context/Modal";
import Slider from "react-slick";
import OpenReviewsModalBtn from "./ReviewsOpenModalBtn.js";
import NewReviewModal from "./NewReviewsModal";
import UpdateReviewsModalBtn from "./UpdateReviewsOpenModalBtn";
import UpdateReviewModal from "./UpdateReviewModal";
import * as reviewActions from "../../store/review";
import "./Reviews.css"
import "./slick.css";

const Reviews = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const reviewsArr = useSelector(state => Object.values(state.review));
  const user = useSelector(state =>state.session.user);

  useEffect(() => {
    dispatch(getReviewsThunk());
  }, [dispatch]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleDelete = (reviewId) => {
    if (window.confirm('Are you sure you want to remove this group?')) {
      dispatch(reviewActions.deleteReviewThunk(reviewId))
    }
    closeModal();
  };

  return (
    <Parallax bgImage="https://888capstone.s3.us-east-2.amazonaws.com/review_bg.jpg" strength={800} blur={0}>
      <div id="reviews-section">
        <Row className="reviews-row">
          <Col className="reviews-col">
            <h2 className="review-title">Let the people speak!</h2>

            <Slider className="review-slider" {...settings}>
              {reviewsArr && reviewsArr.map((review) => (
                <div key={review.id}>
                  <div className="single-review">
                    <p className="review-content">{review.description}</p>

                    <div className="customer-info">
                      <h6>{review.firstName} {review.lastName}</h6>

                      {user?.id === review.customerId && <div className="customer-edit">
                        <UpdateReviewsModalBtn
                          buttonText="Edit"
                          modalComponent={<UpdateReviewModal review={review}/>}
                        />

                        <button className="customer-review-btn" onClick={() => handleDelete(review.id)}>Delete</button>
                      </div>}
                    </div>

                  </div>
                </div>
              ))}
            </Slider>

            {user && <OpenReviewsModalBtn
              buttonText="Leave a review!"
              modalComponent={<NewReviewModal />}
            />}

          </Col>

          <Col>
            <img className="review-img" src="https://888capstone.s3.us-east-2.amazonaws.com/reviews.png" alt="" />
          </Col>
        </Row>
      </div>
    </Parallax>
  );
};

export default Reviews;
