import axios from "axios";
import { timeout } from "../helpers/general";

export const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

apiClient.interceptors.request.use(async function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = "Bearer " + token;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export const getArtist = async (id) => {
  const artist = await apiClient.get(`artists/${id}`);
  return artist.data;
};

export const getArtistTopTracks = async (id) => {
  const topTracks = await apiClient.get(`artists/${id}/top-tracks?market=US`);
  return topTracks.data;
};

export const getCurrentlyPlayingTrack = async () => {
  await timeout(1000);
  const track = await apiClient.get("me/player/currently-playing");
  return track.data;
};

export const getPlaylists = async () => {
  const playlists = await apiClient.get("me/playlists");
  return playlists.data;
};

export const startPlayback = async (uris) => {
  await apiClient.put("me/player/play", {
    uris,
    position_ms: 0,
  });
};

export const getAlbum = async (id) => {
  const album = await apiClient.get(`albums/${id}`);
  return album.data;
};

export const getArtistAlbums = async (id) => {
  const albums = await apiClient.get(`artists/${id}/albums`, {
    params: {
      include_groups: "album",
    },
  });
  return albums.data;
};

export const searchQuery = async (query) => {
  const searchResults = apiClient.get("search", {
    q: query,
    type: "artist,track,album",
    limit: 10,
  });

  return searchResults.data;
};
