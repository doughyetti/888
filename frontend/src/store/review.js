import { csrfFetch } from './csrf';

const GET_REVIEWS = "reviews/GET_REVIEWS";

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews
});

export const getReviewsThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/reviews");

  if (res.ok) {
    const data = await res.json();

    dispatch(getReviews(data));
    return data;
  }
};

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS: {
      return {...state, ...action.reviews.Reviews};
    }
    default:
      return state;
  };
};

export default reviewsReducer;
