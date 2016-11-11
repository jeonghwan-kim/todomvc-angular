const load = country => {
  document.getElementById('content').innerHTML = `${country} is loaded`
  document.title = country;
};

window.addEventListener('click', e => {
  e.preventDefault();
  const country = e.target.text;
  history.pushState({country: country}, `title: ${country}`, country);
  load(country);
});

window.addEventListener('popstate', evt => {
  var state = evt.state;
  if (state !== null) load(state.country)
});
