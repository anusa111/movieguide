document.querySelector(".search-button").addEventListener("click", () => {
  getMovie(document.querySelector(".search-bar").value);
});
function getMovie(movie_name) {
  localStorage.setItem("movie_name", movie_name);
  console.log(movie_name);
  location.href = "searchbar.html";
}
