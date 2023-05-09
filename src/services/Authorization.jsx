export function authorize() {
  const CLIENT_ID = "ed7f005131574da1bc47a1162a969b09";
  const REDIRECT_URI = "http://127.0.0.1:5173/redirect";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const scope = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-recently-played",
    "playlist-read-private",
    "user-modify-playback-state",
  ];
  window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope.join(
    " ",
  )}&response_type=${RESPONSE_TYPE}&show_dialog=true`;
}
