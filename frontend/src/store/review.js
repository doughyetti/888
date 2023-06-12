import { csrfFetch } from './csrf';

const GET_REVIEWS = "reviews/GET_REVIEWS";
const NEW_REVIEW = "reviews/NEW_REVIEW";
const UPDATE_REVIEW = "reviews/UPDATE_REVIEW";
const DELETE_REVIEW = "reviews/DELETE_REVIEW";

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews
});

const newReview = (review) => ({
  type: NEW_REVIEW,
  review
});

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId
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
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(review)
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(newReview(data));
    return data;
  }
};

export const updateReviewThunk = (review) => async (dispatch) => {
  const reviewId = review.id;

  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(review)
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(updateReview(data));
    return data;
  }
};

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE"
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(deleteReview(reviewId));
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
      return {...state, [action.review.newReview.id]: action.review.newReview};
    }
    case UPDATE_REVIEW: {
      return {...state, [action.review.id]: {...action.review}};
    }
    case DELETE_REVIEW: {
      const newState = {...state};
      delete newState[action.reviewId];
      return newState;
    }
    default:
      return state;
  };
};

export default reviewsReducer;
