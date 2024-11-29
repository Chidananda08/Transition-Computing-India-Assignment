const axios = require("axios");

const fetchData = async () => {
  const API_URL = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from API");
  }
};

module.exports = { fetchData };
