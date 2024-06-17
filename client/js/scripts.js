document.getElementById("search-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = document.getElementById("query").value;
  const response = await fetch(
    `http://localhost:3000/api/quotes/search?query=${query}`
  );
  const data = await response.json();
  displayQuotes(data.results);
});

function displayQuotes(quotes) {
  const quotesContainer = document.getElementById("quotes");
  quotesContainer.innerHTML = "";
  quotes.forEach((quote) => {
    const quoteCard = document.createElement("div");
    quoteCard.className = "col-md-4";
    quoteCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <p class="card-text">${quote.content}</p>
                    <h5 class="card-title">${quote.author}</h5>
                    <button class="btn btn-primary" onclick="favouriteQuote('${
                      quote._id
                    }', '${quote.content.replace(/'/g, "\\'")}', '${
      quote.author
    }')">Favourite <i class="fa fa-heart" style="color:red"></i></button>
                </div>
            </div>
        `;
    quotesContainer.appendChild(quoteCard);
  });
}

async function favouriteQuote(id, content, author) {
  await fetch("http://localhost:3000/api/favourites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quote_id: id, content, author }),
  });
}
