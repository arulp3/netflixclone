import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import requests from "./requests";
import './Banner.css'
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  const opts = {
    height : "390",
    width : "100%",
    playerVars : {
        autoplay :1,
    }
  }

  const handleClick = (movie) =>{
    if (trailerUrl){
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
      .then(url => {
         const urlParams =new URLSearchParams(new URL(url).search);
        setTrailerUrl( urlParams.get('v'))
      })
      .catch((error) => console.log(error));
    }
  }

  console.log(movie);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.substr(0, num-1) + "...";
    } else {
      return str;
    }
  }



  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button"  onClick = {()=> handleClick(movie)}>Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description"> {truncateString(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
      

      {trailerUrl && <Youtube videoId={trailerUrl} opts = {opts}/>}
    </header>
  );
}

export default Banner;
