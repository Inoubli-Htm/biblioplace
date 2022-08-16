import {
  ADDLIVRE,
  ALLLIVRE,
  DELETELIVRE,
  GETONELIVRE,
  GETUSERLIVRE,
  UPDATELIVRE,
} from "../types/livreTypes";

const initialState = {
  livres: [],
  livre: null,
  userLivres: [],
  loading: true,
};

const livreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALLLIVRE:
      return { ...state, livres: payload };
    case ADDLIVRE:
      return { ...state, livre: payload, loading: false };
    case UPDATELIVRE:
      return { ...state, livre: payload };
    case GETONELIVRE:
      return { ...state, livre: payload, loading: false };
    case GETUSERLIVRE:
      return { ...state, userLivres: payload };
    case DELETELIVRE:
      return { ...state, userLivres: payload };

    default:
      return state;
  }
};

export default livreReducer;
