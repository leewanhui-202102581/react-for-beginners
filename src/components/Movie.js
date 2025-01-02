import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary="", genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}><img src={coverImg} alt={title} className={styles.movie__img}></img></Link>
      
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>
        {year}</p>
        <p>
          {summary.length > 235
            ? `${summary.slice(0, 235)} ...(More)`
            : summary}
        </p>
        <ul className={styles.movie__genres}>
          {genres.length > 0 ? (
            genres.map((g) => <li key={g}>{g}</li>)
          ) : (
            <li>No genres available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.string.isRequired,
};
export default Movie;
