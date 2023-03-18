//Start of code for fetching the API
const apiKey = "1cf35cc428b913fe98461f80210127bc";
//primary code for fetching datas through API
function pass(get, getID) {
  fetch("https://api.themoviedb.org/3/movie/" + get + "?api_key=" + apiKey)
    .then((response) => response.json())
    .then((data) => {
      collection(data, getID);
    });
}
//End of main/primary code
//since multiple datas like popular movies,top rated movies are needed to
//be fetched from same API so using function
function collection(data, id) {
  console.log(id);
  const img = "https://image.tmdb.org/t/p/w500";
  const main = document.getElementById(id);
  console.log(main);
  main.innerHTML = "";
  data.results.map((movie) => {
    const {
      original_title,
      poster_path,
      vote_average,
      id,
      overview,
      vote_count,
    } = movie;
    const finalImage = img + poster_path;
    const movieCE = document.createElement("div");
    console.log(movieCE);
    movieCE.classList.add(
      "d-flex",
      "justify-content-start",
      "col-3",
      "margin-top"
    );
    movieCE.innerHTML =
      `
            <a href="#" onclick='storeVal(\`` +
      original_title +
      `\`,\`` +
      vote_average +
      `\`,\`` +
      finalImage +
      `\`,\`` +
      overview +
      `\`,\`` +
      id +
      `\`)'><img src="${finalImage}" alt="" id="img" height="260rem" width="180rem"></a>
    `;
    main.appendChild(movieCE);
  });
}
//calling the function to fetch datas
pass("popular", "movie-popular");
pass("top_rated", "movie-toprated");
pass("now_playing", "movie-watch");
//code for storing datas in local browsers
function storeVal(title, rating, image, description, id) {
  localStorage.setItem("title", title);
  localStorage.setItem("rating", rating);
  localStorage.setItem("image", image);
  localStorage.setItem("description", description);
  localStorage.setItem("id", id);
  location.href = "overview.html";
}
