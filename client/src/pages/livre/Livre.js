import axios from "axios";
import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditLivre from "../../components/EditLivre";
import { deleteLivre } from "../../redux/actions/livreActions";

import "./livre.css";

function Livre() {
  const [file, setFile] = useState(null);
  const { livre, loading } = useSelector((state) => state.livreReducer);
  const auth = useSelector((state) => state.authReducer);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handledelete = async () => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteLivre(livre._id));
      navigate("/profile");
    }
  };
  const editImage = async () => {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const data = new FormData();
    data.append("myBook", file);
    try {
      await axios.put(`/api/livres/uploadimg/${livre._id}`, data, config);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <div className="wrapper">
          <div className="product-img">
            <img
              src={
                livre?.imageUrl
                  ? `imgprofile/${livre?.imageUrl}`
                  : "https://burst.shopifycdn.com/photos/books-about-books.jpg?width=925&format=pjpg&exif=1&iptc=1"
              }
              height={380}
              width={327}
            />
            {auth.auth && livre.userId === auth.user._id ? (
              <>
                <Button onClick={() => inputRef.current.click()}>
                  Upload picture
                </Button>
                <Button onClick={editImage}>Add picture</Button>
                <input
                  type="file"
                  ref={inputRef}
                  hidden
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </>
            ) : null}
          </div>
          <div className="product-info">
            <div className="product-text">
              <h3>{livre?.livreName}</h3>

              <h5>{livre?.auteur}</h5>
              <p>
                <br /> {livre?.editeur}
                <br /> {livre?.langue}
                <br /> {livre?.description}
                <br /> {livre?.typeLivre}
              </p>
            </div>
            <div className="product-price-btn">
              {auth.auth && livre.userId === auth.user._id ? (
                <>
                  {" "}
                  <EditLivre livre={livre} />
                  <br />
                  <Button
                    style={{ backgroundColor: "red" }}
                    onClick={handledelete}
                  >
                    Delete
                  </Button>{" "}
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Livre;
