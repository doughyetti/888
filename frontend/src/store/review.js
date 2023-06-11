import { csrfFetch } from './csrf';

const GET_REVIEWS = "reviews/GET_REVIEWS";
const NEW_REVIEW = "reviews/NEW_REVIEW";

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews
});

const newReview = (review) => ({
  type: NEW_REVIEW,
  review
});

export const getReviewsThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/reviews");

  if (res.ok) {
    const data = await res.json();

    dispatch(getReviews(data));
    return data;
  }
};

export const newReviewThunk = (review) => async (dispatch) => {
  const res = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(review)
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(newReview(data));
    return data;
  }
};

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS: {
      return {...state, ...action.reviews.Reviews};
    }
    case NEW_REVIEW: {
      return {...state, [action.review.id]: action.review}
    }
    default:
      return state;
  };
};

export default reviewsReducer;
