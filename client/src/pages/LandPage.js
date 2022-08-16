import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardLivre from "../components/CardLivre";
import { alllivre } from "../redux/actions/livreActions";

function LandPage({ title }) {
  const livres = useSelector((state) => state.livreReducer.livres);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(alllivre());
  }, [dispatch]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: "90%",
        margin: "auto",
      }}
    >
      {livres
        .filter(
          (livre) =>
            livre.livreName
              .toLowerCase()
              .includes(title.toLowerCase().trim()) ||
            livre.auteur.toLowerCase().includes(title.toLowerCase().trim()) ||
            livre.editeur.toLowerCase().includes(title.toLowerCase().trim()) ||
            livre.typeLivre.toLowerCase().includes(title.toLowerCase().trim())
        )
        .map((livre) => (
          <CardLivre livre={livre} key={livre._id} />
        ))}
    </div>
  );
}

export default LandPage;
