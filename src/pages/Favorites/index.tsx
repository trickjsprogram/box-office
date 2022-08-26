import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { FiArrowLeft } from "react-icons/fi";
import Card, { MovieCardData } from "../../component/Card";
import "./style.css";

const Favorites = () => {
  const { movies } = useAppSelector((state) => state.favorites);

  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="header">
          <FiArrowLeft size={24} onClick={() => navigate("/")} />
        </div>
        <h4 className="title">Favorites</h4>
        {!movies.length && (
          <h3 style={{ marginTop: "70px" }}>Please add your favorite movies</h3>
        )}
        <div className="row">
          {movies?.map(({ id, poster_path, original_title }: MovieCardData) => {
            return (
              <Card
                id={id}
                poster_path={poster_path}
                original_title={original_title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favorites;
