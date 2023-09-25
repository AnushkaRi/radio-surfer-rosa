import { createContext, useReducer } from "react";

export const PlayerContext = createContext(null);
export const PlayerDispatchContext = createContext(null);

const PlayerProvider = ({ children }) => {
  const [player, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={player}>
      <PlayerDispatchContext.Provider value={dispatch}>
        {children}
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
};

const initialState = {
  track: null,
  isPlaying: false,
};

const playerReducer = (player, action) => {
  switch (action.type) {
    case "change-track": {
      return {
        ...player,
        track: action.track,
        isPlaying: action.isPlaying,
        progress: action.progress,
      };
    }
    case "stop-playback": {
      return {
        ...player,
        isPlaying: false,
      };
    }
    case "start-playback": {
      return {
        ...player,
        isPlaying: true,
      };
    }
    default: {
      throw Error("Unknown action " + action.type);
    }
  }
};

export default PlayerProvider;
