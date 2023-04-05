import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

import SearchResults from "../../components/SearchResults/SearchResuts";
import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!search) return setSearchResults([]);

    apiClient.get(`search?q=` + search + `&type=artist,track&limit=10`).then((response) => {
      setSearchResults(
        response.data.artists.items.slice(0, 1).map((artist) => {
          return {
            name: artist.name,
            type: artist.type,
            genre: artist.genres[0],
            image: artist.images[2].url,
          };
        }),

        response.data.tracks.items.map((track) => {
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
          };
        }),
      );
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
      <div className={styles.results}>
        {searchResults.map((artist, track) => (
          <SearchResults artist={artist} track={track} key={track.uri} />
        ))}
      </div>
    </div>
  );
};

export default Search;

/* {searchResults.map((track) => (
  <div className={styles.artist_name}>
    <span>{track.title}</span>
  </div>
))} */
