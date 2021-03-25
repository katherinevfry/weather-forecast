import weatherCard from '../components/cardBuilder';
import getWeather from './data/getWeather';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('search-weather')) {
      e.preventDefault();
      const loc = document.querySelector('#location').value;
      getWeather(loc).then((weatherObject) => weatherCard(weatherObject));
      document.querySelector('form').reset();
    }
  });
};
export default domEvents;
