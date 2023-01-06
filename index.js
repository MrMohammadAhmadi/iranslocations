const states = require("./states.json");
const cities = require("./cities.json");

function getStates() {
  return states;
}
function getCities() {
  return cities;
}
function getCertainCities(stateID) {
  let certainCities = [];
  certainCities = cities.filter((item) => item.stateId === stateID);
  return certainCities;
}

module.exports = {
  getStates,
  getCities,
  getCertainCities,
};
