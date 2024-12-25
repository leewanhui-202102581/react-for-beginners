import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail(){
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [movie, setMovie] = useState([]);

    const getMovie = async()=>{
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoaded(true);
    };




    useEffect(() => {
        getMovie();
        }, []);

    return <h1>{loaded ? <div>
        <h2>{movie.title}</h2>
        <img src={movie.medium_cover_image}/>
        <div>
            rating: {movie.rating} 
            year: {movie.year}
        </div>  

        
        <ul>
            {movie.genres.map(g => (
                <li key={g}>{g}</ li>)
            )}
            
            
        </ul>
    </div> : "Loading..."}</h1>;
}
export default Detail;