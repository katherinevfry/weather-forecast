import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.forecastURL;
const appId = firebaseConfig.apiKey;

const getWeather = (loc) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}${loc}&appid=${appId}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
