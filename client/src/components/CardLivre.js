import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getonelivre } from "../redux/actions/livreActions";
import "./cardlivre.css";

function CardLivre({ livre }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(getonelivre(livre._id));
    navigate("/livre");
  };
  return (
    // <div>
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img
    //       style={{ margin: "auto", width: "120px", height: "120px" }}
    //       variant="top"
    //       src={
    //         livre.imageUrl
    //           ? `imgprofile/${livre.imageUrl}`
    //           : "https://burst.shopifycdn.com/photos/books-about-books.jpg?width=925&format=pjpg&exif=1&iptc=1"
    //       }
    //     />
    //     <Card.Body>
    //       <Card.Title>{livre.livreName}</Card.Title>
    //       <Card.Text>
    //         <br /> <h6>Auteur: </h6>
    //         {livre.auteur}
    //         <br /> <h6>description: </h6> {livre.description}
    //       </Card.Text>

    //       <Button variant="primary" onClick={handleEdit}>
    //         details
    //       </Button>
    //     </Card.Body>
    //   </Card>
    // </div>
    <>
      <div className="col-md-4">
        <div className="card p-3">
          <div className="d-flex flex-row mb-3">
            <img
              src={
                livre.imageUrl
                  ? `imgprofile/${livre.imageUrl}`
                  : "https://burst.shopifycdn.com/photos/books-about-books.jpg?width=925&format=pjpg&exif=1&iptc=1"
              }
              style={{ width: "150px", height: "150px" }}
            />
            <div className="d-flex flex-column ml-2">
              <h3>{livre.livreName}</h3>
              <p>&nbsp;</p>
              <span className="text-black-50">
                <h5>{livre.auteur}</h5>
              </span>
              <p>&nbsp;</p>
            </div>
          </div>
          <h6>{livre.description}</h6>
          <div className="d-flex justify-content-between install mt-3">
            <span>{livre.typeLivre}</span>
            <span className="text-primary">
              <Button variant="primary" onClick={handleEdit}>
                Détails
              </Button>
              <i className="fa fa-angle-right" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLivre;
