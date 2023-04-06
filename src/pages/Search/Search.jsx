import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

import SearchResults from "../../components/SearchResults/SearchResuts";
import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchArtistResults, setSearchArtistResults] = useState([]);
  const [searchTrackResults, setSearchTrackResults] = useState([]);

  useEffect(() => {
    if (!search) return setSearchArtistResults([]);

    apiClient.get(`search?q=` + search + `&type=artist,track&limit=10`).then((response) => {
      setSearchArtistResults(
        response.data.artists.items.slice(0, 1).map((artist) => {
          return {
            name: artist.name,
            type: artist.type,
            image: artist.images[2].url,
            uri: artist.uri,
          };
        }),
      );
      setSearchTrackResults(
        response.data.tracks.items.slice(0, 4).map((track) => {
          return {
            artist: track.album.artists[0].name,
            title: track.name,
            image: track.album.images[2].url,
            duration: track.duration_ms,
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
        {/* {searchArtistResults.map((artist) => (
          <SearchResults artist={artist} key={artist.uri} />
        ))} */}
        {searchTrackResults.map((track) => (
          <SearchResults track={track} key={track.uri} />
        ))}
      </div>
    </div>
  );
};

export default Search;
