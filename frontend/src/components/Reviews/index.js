import { Parallax } from "react-parallax"
import { Row, Col } from "reactstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from "../../store/review";
import Slider from "react-slick";
import OpenReviewsModalBtn from "./ReviewsOpenModalBtn.js";
import ReviewModal from "./ReviewsModal";
import "./Reviews.css"
import "./slick.css";
import OpenModalButton from "../OpenModalButton";

const Reviews = () => {
  const dispatch = useDispatch();

  const reviewsArr = useSelector(state => Object.values(state.review));

  useEffect(() => {
    dispatch(getReviewsThunk());
  }, [dispatch]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Parallax bgImage="https://888capstone.s3.us-east-2.amazonaws.com/review_bg.jpg" strength={800} blur={0}>
      <div id="reviews-section">
        <Row className="reviews-row">
          <Col className="reviews-col">
            <h2 className="review-title">Let the people speak!</h2>

            <Slider className="review-slider" {...settings}>
              {reviewsArr && reviewsArr.map((review) => (
                <div>
                  <div className="single-review">
                    <p className="review-content">{review.description}</p>

                    <div className="customer-info">
                      <h6>{review.Customer.firstName} {review.Customer.lastName}</h6>

                      <div className="customer-edit">
                        <span className="customer-review-btn">Edit</span>
                        <span className="customer-review-btn">Delete</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </Slider>

            <OpenReviewsModalBtn
              buttonText="Leave a review!"
              modalComponent={<ReviewModal />}
            />

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
