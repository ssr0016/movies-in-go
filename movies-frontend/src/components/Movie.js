import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Movie = () => {
  const [movie, setMovie] = useState({});

  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16",
      runtime: 148,
      mpaa_rating: "PG-13",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    };
    setMovie(myMovie);
  }, [id]);
  return (
    <div>
      <h2>Movie: {movie.title}</h2>
      <small>
        <em>
          {movie.release_date}, {movie.runtime} minutes, Rated{" "}
          {movie.mpaa_rating}
        </em>
      </small>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
