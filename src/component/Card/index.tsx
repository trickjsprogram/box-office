import React, { useState } from "react";
import { MovieType } from "../../common/types";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addFavorite, removeFavorite } from "../../features/favMovieSlice";

export type MovieCardData = Omit<
  MovieType,
  "overview" | "vote_average" | "release_date" | "runtime" | "genres"
>;

const Card = (movieData: MovieCardData) => {
  const { movies } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const [isFavorites, setIsFavorites] = useState<boolean>(() => {
    const isFavoriteMovie = movies.find((movie) => movie.id === movieData.id);
    return !!isFavoriteMovie;
  });

  const handleFavorites = () => {
    if (isFavorites) {
      dispatch(removeFavorite(movieData.id));
      setIsFavorites((prevState) => !prevState);
    } else {
      dispatch(addFavorite(movieData));
      setIsFavorites((prevState) => !prevState);
    }
  };

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card card-block">
        <h4 className="icon-fav">
          <i>
            {isFavorites ? (
              <AiFillStar size={24} onClick={handleFavorites} />
            ) : (
              <AiOutlineStar size={24} onClick={handleFavorites} />
            )}
          </i>
        </h4>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.original_title}
        />
        <Link to={`/movie/${movieData.id}`} style={{ textDecoration: "none" }}>
          <h5 className="card-title mt-3 mb-3">{movieData.original_title}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;
