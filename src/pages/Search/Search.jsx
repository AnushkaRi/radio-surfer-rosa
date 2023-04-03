import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!search) return setSearchResults([]);

    apiClient.get(`search?q=` + search + `&type=artist,track`).then((response) => {
      setSearchResults(response.data);
      console.log(response.data);
    });
  }, [search]);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <FaSearch color="black" />
        <input
          className={styles.input}
          placeholder="Search Song/Artist"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className={styles.results_container}>Artists</div>
    </div>
  );
};

export default Search;
