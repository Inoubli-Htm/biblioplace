import { REMOVEALLERT, SETALLERT } from "../types/authtypes";

const initialState = [];

const allertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETALLERT:
      return [...state, payload];
    case REMOVEALLERT:
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
};

export default allertReducer;
