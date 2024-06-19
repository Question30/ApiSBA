function createListGroupItem(string, id) {
  const liEl = document.createElement("li");
  liEl.classList.add("list-group-item");
  liEl.setAttribute("id", id);
  liEl.textContent = string;
  return liEl;
}

function createCard(info) {
  const card = document.createElement("div");
  card.classList.add("card", "m-3");

  const cardimg = document.createElement("img");
  cardimg.classList.add("card-img-top");
  cardimg.setAttribute("src", info.img);
  cardimg.setAttribute("alt", info.title);

  const cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "text-center",
    "d-flex",
    "flex-column",
    "justify-content-end"
  );

  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.textContent = info.title;

  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary");
  btn.textContent = "View More Info";

  cardBody.appendChild(h5);
  cardBody.appendChild(btn);
  card.appendChild(cardimg);
  card.appendChild(cardBody);

  return card;
}

function loadInfo(info) {
  //Create container to house everything
  const container = document.createElement("div");
  container.classList.add(
    "d-flex",
    "p-2",
    "mt-4",
    "flex-column",
    "flex-md-row"
  );
  //Create image, set src and alt
  const img = document.createElement("img");
  img.setAttribute("src", info.data.images.jpg.image_url);
  img.setAttribute("alt", info.data.title);
  //append to container
  container.appendChild(img);

  //create infoContainer
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("mx-md-3", "w-100", "text-light");
  //create title and append to infoContainer
  const title = document.createElement("h3");
  title.textContent = info.data.title;
  infoContainer.appendChild(title);

  //Create genre container
  const genreDiv = document.createElement("div");
  genreDiv.classList.add("border", "border-black", "d-flex");
  genreDiv.textContent = "Genres:";

  //Create badge container for genres
  const badgeContainer = createBadgeContainer(info.data.genres);
  genreDiv.appendChild(badgeContainer);
  infoContainer.appendChild(genreDiv);

  //Create rank and append
  const rank = createSection("Rank", info.data.rank);
  infoContainer.appendChild(rank);

  //Create status and append
  const status = createSection("Status", info.data.status);
  infoContainer.appendChild(status);

  //Create type and append
  const type = createSection("Type", info.data.type);
  infoContainer.appendChild(type);

  //Create episodes and append
  const episodes = createSection("Episodes", info.data.episodes);
  infoContainer.appendChild(episodes);

  //Create synopsis
  const synopsis = createSection("Synopsis", info.data.synopsis);
  infoContainer.appendChild(synopsis);

  //Favorites Button
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary", "rounded", "mt-2");
  button.textContent = "Add to Favorites";
  button.setAttribute("id", "favorite");
  button.setAttribute("value", info.data.mal_id);
  infoContainer.appendChild(button);

  container.appendChild(infoContainer);

  return container;
}

function createSection(string, info) {
  const div = document.createElement("div");
  div.classList.add("border", "border-black");

  if (string === "Synopsis") {
    const h6 = document.createElement("h6");
    h6.textContent = `${string}:`;
    div.appendChild(h6);

    const p = document.createElement("p");
    p.textContent = info;
    div.appendChild(p);
  } else {
    div.textContent = `${string}: ${info}`;
  }

  return div;
}

function createBadgeContainer(genresArr) {
  const badgeContainer = document.createElement("div");
  badgeContainer.classList.add("d-flex", "justify-content-around", "w-100");
  genresArr.forEach((element) => {
    const span = document.createElement("span");
    span.classList.add("badge", "text-bg-light");
    span.textContent = element.name;
    badgeContainer.appendChild(span);
  });

  return badgeContainer;
}

function createAlert(title) {
  const alert = document.createElement("div");
  alert.classList.add("alert", "alert-primary");
  alert.setAttribute("role", "alert");
  alert.textContent = `${title} was added to favorites`;

  return alert;
}

export { createListGroupItem, createCard, loadInfo, createAlert };
