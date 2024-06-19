import {
  createListGroupItem,
  createAlert,
  createCard,
  loadInfo,
} from "./Dom.js";
import { getAnimeByName, getAnimeById } from "./dbData.js";

const searchBar = document.getElementById("search-bar");
const seacrchButton = document.getElementById("search-button");

const listGroup = document.getElementById("list-group");

const container = document.getElementById("info");

const favoriteArr = [];

const infoClasses = ["container", "bg-secondary", "mt-3", "p-2", "rounded"];

const galleryClasses = ["d-flex", "flex-wrap"];

loadFavorites(favoriteArr);

seacrchButton.addEventListener("click", async (evt) => {
  listGroup.innerHTML = "";
  const value = searchBar.value;

  const list = await getAnimeByName(value);

  const data = list.data;

  data.forEach((element) => {
    const liEl = createListGroupItem(element.title, element.mal_id);
    listGroup.appendChild(liEl);
  });
});

listGroup.addEventListener("click", async (evt) => {
  const data = await getAnimeById(evt.target.id);
  listGroup.innerHTML = "";
  container.innerHTML = "";
  container.classList.remove(...galleryClasses);
  container.classList.add(...infoClasses);

  console.log(container.classList.keys());

  const infoContainer = loadInfo(data);
  container.appendChild(infoContainer);
});

container.addEventListener("click", async (evt) => {
  if (evt.target.id === "favorite") {
    const info = await getAnimeById(evt.target.value);
    favoriteArr.push({
      img: info.data.images.jpg.image_url,
      title: info.data.title,
      id: info.data.mal_id,
    });
    console.log("Added to favorites: ", favoriteArr);
    const alert = createAlert(info.data.title);
    container.appendChild(alert);
    setTimeout(() => {
      loadFavorites(favoriteArr);
    }, 2000);
  }
});

function loadFavorites(arr) {
  container.innerHTML = "";
  if (arr.length === 0) {
    container.style.color = "white";
    container.textContent =
      "No items in your favorites. Search for anime and add them to your list!";
  } else {
    container.classList.remove(...infoClasses);
    container.classList.add(...galleryClasses);
    arr.forEach((element) => {
      console.log(element);
      const card = createCard(element);
      container.appendChild(card);
    });
  }
}
