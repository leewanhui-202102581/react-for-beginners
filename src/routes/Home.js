import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import Searcher from "../components/Searcher";
import styles from "./Home.module.css";

function home () {
  
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const getMovies = async() => {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies);
      setFilteredMovies(json.data.movies);
      setLoading(false);
    }
    
    useEffect(() => {
      getMovies()
    }, []);

    const onFilteredDataChange = (data) => {
      setFilteredMovies(data);

    };
  
    return <div className={styles.container}>
      {loading ? <div className={styles.loader}><h1>Loading...</h1></div> : 
        <div>

          <div className={styles.mainTitle}><h1>What movie do you want to watch Today?</h1></div>

          <div className={styles.searcher}> 
            <Searcher 
             movieList = {movies} onFilteredDataChange={onFilteredDataChange}/>
          </div>

          <div className={styles.movies}>
            {filteredMovies.map((movie) => 
            <Movie 
              key={movie.id}
              id ={movie.id}
              coverImg={movie.medium_cover_image}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />)}
          </div>

        </div>}
      </div>;
}

export default home;