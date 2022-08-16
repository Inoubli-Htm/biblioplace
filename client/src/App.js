import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Profile from "./pages/profile/Profile";
import LandPage from "./pages/LandPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./router/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { userCurrent } from "./redux/actions/authActions";
import Error from "./components/Error";
import Livre from "./pages/livre/Livre";
import AddLivre from "./components/AddLivre";
import EditLivre from "./components/EditLivre";
import UsersLists from "./pages/UsersLists";

function App() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  const getTitle = (title) => {
    setTitle(title);
    navigate("/");
  };

  return (
    <div className="App">
      <NavBar getTitle={getTitle} />
      <Error />
      <Routes>
        <Route path="/" element={<LandPage title={title} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/livre" element={<Livre />} />
        <Route path="/userslists" element={<UsersLists />} />

        <Route
          path="/addlivre"
          element={
            <PrivateRoute>
              <AddLivre />
            </PrivateRoute>
          }
        />
        <Route
          path="/editlivre"
          element={
            <PrivateRoute>
              <EditLivre />
            </PrivateRoute>
          }
        />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
