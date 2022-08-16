import axios from "axios";
import { GET_USERS } from "../types/userTypes";
import { userCurrent } from "./authActions";

// get all users
export const getUsers = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/users/allusers", config);
    console.log(res.data);
    dispatch({ type: GET_USERS, payload: res.data.users });
  } catch (error) {
    console.log("Error");
  }
};
// update user
export const updateUser = (id, newData) => async (dispatch) => {
  const config = {
    headers: { authorization: localStorage.getItem("token") },
  };
  try {
    await axios.put(`/api/users/updateuser/${id}`, newData, config);

    dispatch(userCurrent());
  } catch (error) {
    console.log("Error");
  }
};

// delete user
export const deleteUser = (id) => async (dispatch) => {
  const config = {
    headers: { authorization: localStorage.getItem("token") },
  };
  try {
    await axios.delete(`/api/users/deleteuser/${id}`, config);

    dispatch(getUsers());
  } catch (error) {
    console.log("Error");
  }
};
