document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("http://localhost:3000/api/favourites");
  const favourites = await response.json();
  displayFavourites(favourites);
});

function displayFavourites(favourites) {
  const favouritesContainer = document.getElementById("favourites");
  favouritesContainer.innerHTML = "";
  favourites.forEach((fav) => {
    const favouriteCard = document.createElement("div");
    favouriteCard.className = "col-md-4";
    favouriteCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <p class="card-text">${fav.content}</p>
                    <h5 class="card-title">${fav.author}</h5>
                </div>
            </div>
        `;
    favouritesContainer.appendChild(favouriteCard);
  });
}
