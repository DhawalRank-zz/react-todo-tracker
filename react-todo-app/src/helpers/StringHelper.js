export const StringHelper = {
  convertStringToBoolean
};

function convertStringToBoolean(value) {
  if (
    value.toLowerCase() === "on" ||
    value.toLowerCase() === "true" ||
    value.toLowerCase() === "start" ||
    value.toLowerCase() === "1"
  ) {
    return true;
  } else {
    return false;
  }
}
