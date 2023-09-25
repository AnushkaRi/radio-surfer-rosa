import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { apiClient } from "../../services/spotify";
import PlaylistResults from "../../components/PlaylistResults/PlaylistResults";

const Playlist = () => {
  const params = useParams();
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  useEffect(() => {
    apiClient.get(`playlists/${params.id}`).then((response) => {
      setSelectedPlaylist(response.data);
    });
  }, [params.id]);

  return (
    <div>
      <PlaylistResults selectedPlaylist={selectedPlaylist} />
    </div>
  );
};

export default Playlist;
