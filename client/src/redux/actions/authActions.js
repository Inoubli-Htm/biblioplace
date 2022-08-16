import axios from "axios";
import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../types/authtypes";
import { setAllert } from "./allertActions";

// Register
export const userRegister = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/signup", data);

    dispatch({
      type: REGISTER,
      payload: res.data,
    });

    dispatch(setAllert(res.data.msg, "success"));
    navigate("/profile");
  } catch (error) {
    dispatch({
      type: FAIL,
    });
    error.response.data.errors.forEach((err) =>
      dispatch(setAllert(err.msg, "danger"))
    );
  }
};

// LogIn
export const userLogin = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/signin", data);

    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    dispatch(setAllert(res.data.msg, "success"));
    navigate("/profile");
  } catch (error) {
    dispatch({
      type: FAIL,
    });
    error.response.data.errors.forEach((err) =>
      dispatch(setAllert(err.msg, "danger"))
    );
  }
};

//LogOut

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};

// get auth user
export const userCurrent = () => async (dispatch) => {
  const config = {
    headers: { authorization: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get("/api/auth/current", config);
    dispatch({ type: CURRENT, payload: res.data });
  } catch (error) {
    dispatch({
      type: FAIL,
    });
  }
};
