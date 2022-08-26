import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchMovieById from "../../services/FetchMovie";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import "./style.css";

const Movie = () => {
  const { id } = useParams();
  const { data: movie } = useFetchMovieById(id || "");

  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="header">
          <FiArrowLeft size={24} onClick={() => navigate("/")} />
        </div>
        <div className="movie-card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-5 col-md-4 col-sm-6">
                <div className="white-box">
                  <div className="poster">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                      alt={movie?.original_title}
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6">
                <h4 className="text-left title">{movie?.original_title}</h4>
                <p className="text-left">{movie?.overview}</p>
                <div className="star">
                  <AiFillStar size={24} />
                  <span className="rating">{movie?.vote_average}</span>
                </div>
                <div className="text-left movie-detail">
                  <span>
                    Type
                    <strong>Movie</strong>
                  </span>
                  <span>
                    Release Data
                    <strong>{movie?.release_date}</strong>
                  </span>
                  <span>
                    Run Time
                    <strong>{movie?.runtime}</strong>
                  </span>
                  <span>
                    Genres
                    <strong>
                      {movie?.genres.map(({ name }) => name).join(", ")}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
