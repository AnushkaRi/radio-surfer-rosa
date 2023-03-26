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

console.log(showTimeOfDay());
