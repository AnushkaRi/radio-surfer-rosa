export const showTimeOfDay = () => {
  const today = new Date();
  const hour = today.getHours();

  if (hour < 12) {
    return "morning";
  } else if (hour < 18) {
    return "afternoon";
  } else if (hour < 22) {
    return "evening";
  } else {
    return "night";
  }
};

export function msToMinutesAndSeconds(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
