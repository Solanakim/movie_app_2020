import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";


//component가 state가 필요 없으면 function component를 사용한다. 
//if component doesnt need to have state we can use function component instead of className component 


function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year, title, summary, poster, genres
        }
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;