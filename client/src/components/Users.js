import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/userActions";

function Users() {
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <div>Users</div>;
}

export default Users;
