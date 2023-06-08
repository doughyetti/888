import { csrfFetch } from './csrf';

const GET_MENUS = "menus/GET_MENUS";

const getMenus = (menus) => ({
  type: GET_MENUS,
  menus
});

export const getMenuThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/menus");

  if (res.ok) {
    const data = await res.json();

    dispatch(getMenus(data));
    return data;
  }
};

const initialState = {};

const menusReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_MENUS: {
      return { ...state, ...action.menus.Menus };
    }
    default:
      return state;
  };
};

export default menusReducer;
