import {PropTypes, func } from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Searcher.module.css";


function searcher ({movieList, onFilteredDataChange}) {
    const [searchWord, setsearchWord] = useState("");

    const onChange = (event) => {
        setsearchWord(event.target.value);
    };
    const onClick = (event) => {
        event.preventDefault();
        const filteredMovies = movieList.filter((movie) => {
            return movie.title.toLowerCase().includes(searchWord.toLowerCase());
        }); 
        onFilteredDataChange(filteredMovies);
        console.log(filteredMovies);
        
    };


    return (<div className={styles.searchContainer}>
            <input  class={styles.searchBox} type="text"value={searchWord} onChange={onChange}></input>
            <button class={styles.searchBtn} onClick={onClick}>🔍</button>
        
    </div>);

}
searcher.propTypes = {
    movieList:PropTypes.array.isRequired, 
    onFilteredDataChange:PropTypes.func.isRequired,
}


export default searcher