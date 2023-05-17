import axios from "axios";

// Spotify API
const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

apiClient.interceptors.request.use(async function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = "Bearer " + token;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default apiClient;

/* // Function to start/resume playback with a track URI
export async function startPlayback(uri) {
  try {
    const response = await apiClient.put("/me/player/play", { uris: [uri] });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error.message);
    }
  } catch (error) {
    throw new Error("Error starting playback:", error);
  }
} */

// Converter ms to minutes & seconds
export function msToMinutesAndSeconds(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
