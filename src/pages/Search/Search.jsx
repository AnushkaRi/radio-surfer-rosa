import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

import SearchResults from "../../components/SearchResults/SearchResuts";
import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchArtistResults, setSearchArtistResults] = useState([]);
  const [searchTrackResults, setSearchTrackResults] = useState([]);
  const [searchAlbumResults, setSearchAlbumResults] = useState([]);

  useEffect(() => {
    apiClient.get(`search?q=` + search + `&type=artist,track,album&limit=10`).then((response) => {
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

      setSearchAlbumResults(
        response.data.albums.items.map((album) => {
          return {
            image: album.images[1].url,
            title: album.name,
            year: album.release_date.split("-")[0],
            artist: album.artists[0].name,
          };
        }),
      );
      console.log(response.data);
    });
  }, [search]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <div className={styles.search_container}>
      <form className={styles.search_bar} onSubmit={submitHandler}>
        <FaSearch color="black" />
        <input
          className={styles.input}
          placeholder="Search for good music!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <div>
        <SearchResults
          search={search}
          searchArtistResults={searchArtistResults}
          searchTrackResults={searchTrackResults}
          searchAlbumResults={searchAlbumResults}
        />
      </div>
    </div>
  );
};

export default Search;
