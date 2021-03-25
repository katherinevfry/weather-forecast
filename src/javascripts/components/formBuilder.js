const formBuilder = () => {
  document.querySelector('#search-box').innerHTML = `
  <form id="get-weather" class="shadow p-3 rounded">
  <div class="form-group">
    <h2 for="search" id="search-title">Get the Weather</h2>
    <input type="text" class="form-control" id="location" aria-describedby="location" placeholder="zip code, city, etc.">
  </div>
  <button type="submit" id="search-weather" class="btn btn-outline-dark">Submit</button>
</form>`;
};

export default formBuilder;
