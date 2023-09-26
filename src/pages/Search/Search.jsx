import { FaSearch, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

import SearchResults from "../../components/SearchResults/SearchResuts";
import { apiClient } from "../../services/spotify";
import styles from "./styles.module.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchArtistResults, setSearchArtistResults] = useState([]);
  const [searchTrackResults, setSearchTrackResults] = useState([]);
  const [searchAlbumResults, setSearchAlbumResults] = useState([]);

  useEffect(() => {
    apiClient
      .get(`search?q=` + search + `&type=artist%2Calbum%2Ctrack`)
      .then((response) => {
        setSearchArtistResults(
          response.data.artists.items.slice(0, 1).map((artist) => {
            return {
              name: artist.name,
              type: artist.type,
              image: artist.images[2].url,
              uri: artist.uri,
              id: artist.id,
            };
          })
        );

        setSearchTrackResults(
          response.data.tracks.items.slice(0, 4).map((track) => {
            return {
              artist: track.album.artists[0].name,
              title: track.name,
              image: track.album.images[2].url,
              duration: track.duration_ms,
              uri: track.uri,
              id: track.id,
            };
          })
        );

        setSearchAlbumResults(
          response.data.albums.items.map((album) => {
            return {
              image: album.images[1].url,
              title: album.name,
              year: album.release_date.split("-")[0],
              artist: album.artists[0].name,
              id: album.id,
            };
          })
        );
      });
  }, [search]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const clearSearchHandler = () => {
    setSearch("");
    setSearchAlbumResults([]);
    setSearchArtistResults([]);
    setSearchTrackResults([]);
  };

  return (
    <div className={styles.search_container}>
      <form className={styles.search_bar} onSubmit={submitHandler}>
        <FaSearch color="white" />
        <input
          className={styles.input}
          placeholder="Search for good music!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        {search && <FaTimes color="white" onClick={clearSearchHandler} />}
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
