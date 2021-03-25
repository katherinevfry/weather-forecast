const weatherCard = (weatherObject) => {
  document.querySelector('#weather-cards').innerHTML += `
  <div class="card" style="width: 10rem; height:20rem;">
  <img src="http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${weatherObject.name}</h5>
    <p class="card-text">${weatherObject.main.temp} | ${weatherObject.weather[0].description}</p>
    <p class="card-text"></p>
  </div>
</div>`;
};

export default weatherCard;
