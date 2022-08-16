import axios from "axios";
import { FAIL } from "../types/authtypes";
import {
  ADDLIVRE,
  ALLLIVRE,
  DELETELIVRE,
  GETONELIVRE,
  GETUSERLIVRE,
  UPDATELIVRE,
} from "../types/livreTypes";
import { setAllert } from "./allertActions";

// get all livre
export const alllivre = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/livres/alllivres");
    console.log(res.data);
    dispatch({ type: ALLLIVRE, payload: res.data.livres });
  } catch (error) {
    console.log("error");
  }
};

// get user livre
export const getuserlivre = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/livres/getuserlivres", config);
    console.log(res.data);
    dispatch({ type: GETUSERLIVRE, payload: res.data.livres });
  } catch (error) {
    console.log("error");
  }
};

// add livre
export const addLivre = (data, navigate) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/api/livres/addlivre", data, config);
    dispatch({
      type: ADDLIVRE,
      payload: res.data.livre,
    });
    dispatch(setAllert(res.data.msg, "success"));
    navigate("/livre");
  } catch (error) {
    dispatch({
      type: FAIL,
    });
    error.response.data.errors.forEach((err) =>
      dispatch(setAllert(err.msg, "danger"))
    );
  }
};

// update livre
export const updateLivre = (id, newData) => async (dispatch) => {
  const config = {
    headers: { authorization: localStorage.getItem("token") },
  };
  try {
    const res = await axios.put(
      `/api/livres/updatelivre/${id}`,
      newData,
      config
    );
    dispatch({ type: UPDATELIVRE, payload: res.data.updatelivre });
  } catch (error) {
    console.log("Error");
  }
};

// get one livre
export const getonelivre = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/livres/getonelivre/${id}`);
    console.log(res.data);
    dispatch({ type: GETONELIVRE, payload: res.data.livre });
  } catch (error) {
    console.log("Error");
  }
};

// delete livre
export const deleteLivre = (id) => async (dispatch) => {
  const config = {
    headers: { authorization: localStorage.getItem("token") },
  };
  try {
    const res = await axios.delete(`/api/livres/deletelivre/${id}`, config);
    dispatch(getuserlivre());
  } catch (error) {
    console.log("Error");
  }
};
