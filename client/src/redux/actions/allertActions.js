import { v4 as uuidv4 } from "uuid";
import { REMOVEALLERT, SETALLERT } from "../types/authtypes";
export const setAllert = (msg, allertType) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SETALLERT,
    payload: { id, msg, allertType },
  });
  setTimeout(() => {
    dispatch({
      type: REMOVEALLERT,
      payload: id,
    });
  }, 3000);
};
