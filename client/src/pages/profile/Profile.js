import React, { useEffect, useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userCurrent } from "../../redux/actions/authActions";
import EditUser from "../../components/EditUser";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getonelivre, getuserlivre } from "../../redux/actions/livreActions";

function Profile() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editImage = async (e) => {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const data = new FormData();
    data.append("myPicture", e.target.files[0]);
    try {
      await axios.put("/api/users/uploadimg", data, config);
      dispatch(userCurrent());
    } catch (error) {
      console.log(error);
    }
  };

  const { user, auth } = useSelector((state) => state.authReducer);
  const userLivres = useSelector((state) => state.livreReducer.userLivres);

  useEffect(() => {
    dispatch(getuserlivre());
  }, [dispatch]);

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src={
                  user.imageUrl
                    ? `/imgprofile/${user.imageUrl}`
                    : "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                }
                alt="MyPicture"
                height={380}
                width={327}
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" onChange={editImage} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{user?.userName}</h5>
              <h6>{user?.role}</h6>
            </div>
          </div>
          <EditUser user={user} />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <h3>Mes Livres</h3>
              {userLivres.map((livre) => (
                <p
                  onClick={() => {
                    dispatch(getonelivre(livre._id));
                    navigate("/livre");
                  }}
                >
                  <Link to="/livre">
                    <a>{livre.livreName}</a>
                  </Link>
                </p>
              ))}

              <br />
              <Link to="/addlivre">
                <Button variant="primary">Ajouter un livre</Button>
              </Link>
              <br />
              <br />
              {auth && user.role === "Administrateur" ? (
                <>
                  <Link to="/userslists">
                    <Button variant="primary">Tous les utilisateurs</Button>
                  </Link>
                </>
              ) : null}
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Pseudo</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user?.userId}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Nom</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user?.userName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user?.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Telephone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user?.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user?.profession}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Adresse</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user?.userAdress}</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {/* <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
