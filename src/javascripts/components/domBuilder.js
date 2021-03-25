const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="weather-cards"></div>
  <div id="search-box"></div>`;
};

export default domBuilder;
