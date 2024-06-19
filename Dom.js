function createListGroupItem(string, id) {
  const liEl = document.createElement("li");
  liEl.classList.add("list-group-item");
  liEl.setAttribute("id", id);
  liEl.textContent = string;
  return liEl;
}

function createCard(info) {
  console.log(info.data);
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
  const badgeContainer = document.createElement("div");
  badgeContainer.classList.add("d-flex", "justify-content-around", "w-100");
  info.data.genres.forEach((element) => {
    const span = document.createElement("span");
    span.classList.add("badge", "text-bg-light");
    span.textContent = element.name;
    badgeContainer.appendChild(span);
  });
  genreDiv.appendChild(badgeContainer);
  infoContainer.appendChild(genreDiv);

  //Create rank and append
  const rank = document.createElement("div");
  rank.classList.add("border", "border-black");
  rank.textContent = `Rank: ${info.data.rank}`;
  infoContainer.appendChild(rank);

  //Create status and append
  const status = document.createElement("div");
  status.classList.add("border", "border-black");
  status.textContent = `Status: ${info.data.status}`;
  infoContainer.appendChild(status);

  //Create type and append
  const type = document.createElement("div");
  type.classList.add("border", "border-black");
  type.textContent = `Type: ${info.data.type}`;
  infoContainer.appendChild(type);

  //Create episodes and append
  const episodes = document.createElement("div");
  episodes.classList.add("border", "border-black");
  episodes.textContent = `Episodes: ${info.data.episodes}`;
  infoContainer.appendChild(episodes);

  //Create synopsis
  const synopsis = document.createElement("div");
  synopsis.classList.add("border", "border-black");
  const h6 = document.createElement("h6");
  h6.textContent = "Synopsis";
  synopsis.appendChild(h6);
  const p = document.createElement("p");
  p.textContent = `${info.data.synopsis}`;
  synopsis.appendChild(p);
  infoContainer.appendChild(synopsis);

  //Favorites Button
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary", "rounded", "mt-2");
  button.textContent = "Add to Favorites";
  infoContainer.appendChild(button);

  container.appendChild(infoContainer);

  return container;
}

export { createListGroupItem, createCard, loadInfo };
