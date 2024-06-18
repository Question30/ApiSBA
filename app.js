import { createListGroupItem, createCard, loadInfo } from "./Dom.js";
import { getAnimeByName, getAnimeById } from "./dbData.js";

const searchBar = document.getElementById("search-bar");
const seacrchButton = document.getElementById("search-button");

const listGroup = document.getElementById("list-group");

seacrchButton.addEventListener("click", async (evt) => {
  listGroup.innerHTML = "";
  const value = searchBar.value;

  const list = await getAnimeByName(value);

  const data = list.data;

  console.log(data);

  data.forEach((element) => {
    const liEl = createListGroupItem(element.title, element.mal_id);
    listGroup.appendChild(liEl);
  });
});

listGroup.addEventListener("click", async (evt) => {
  const data = await getAnimeById(evt.target.id);
  listGroup.innerHTML = "";
  createCard(data);
});
