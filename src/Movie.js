import React from "react";
import PropTypes from "prop-types";

//component가 state가 필요 없으면 function component를 사용한다. 
//if component doesnt need to have state we can use function component instead of class component 


function Movie(id, year, title, summary, poster){
    return <h4>{id.title}</h4>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;