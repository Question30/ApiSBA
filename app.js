import {
  createListGroupItem,
  createAlert,
  createCard,
  createInfoContainer,
} from "./Dom.js";
import { getAnimeByName, getAnimeById } from "./dbData.js";

const searchBar = document.getElementById("search-bar");
const seacrchButton = document.getElementById("search-button");

const listGroup = document.getElementById("list-group");

const container = document.getElementById("info");

const favoriteArr = JSON.parse(localStorage.getItem("myFavoriteAnime") || "[]");

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

listGroup.addEventListener("click", (evt) => {
  loadInfo(evt.target.id);
});

container.addEventListener("click", async (evt) => {
  if (evt.target.id === "favorite") {
    const info = await getAnimeById(evt.target.value);
    const obj = {
      img: info.data.images.jpg.image_url,
      title: info.data.title,
      id: info.data.mal_id,
    };

    if (!favoriteContains(obj)) {
      favoriteArr.push(obj);
      localStorage.setItem("myFavoriteAnime", JSON.stringify(favoriteArr));
      const alert = createAlert(info.data.title);
      container.appendChild(alert);
      setTimeout(() => {
        loadFavorites(favoriteArr);
      }, 2000);
    } else {
      const alert = createAlert(info.data.title);
      alert.textContent = `${info.data.title} is already in your list!`;
      container.appendChild(alert);
      setTimeout(() => {
        container.removeChild(alert);
      }, 2000);
    }
  } else if (evt.target.innerHTML === "View More Info") {
    loadInfo(evt.target.id);
  }
});

function favoriteContains(obj) {
  let result = false;
  favoriteArr.forEach((element) => {
    if (element.title === obj.title) {
      result = true;
    }
  });

  return result;
}

async function loadInfo(id) {
  const data = await getAnimeById(id);
  listGroup.innerHTML = "";
  container.innerHTML = "";
  container.classList.remove(...galleryClasses);
  container.classList.add(...infoClasses);

  const infoContainer = createInfoContainer(data);
  container.appendChild(infoContainer);
}

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
      const card = createCard(element);
      container.appendChild(card);
    });
  }
}
