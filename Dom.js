function createListGroupItem(string, id) {
  const liEl = document.createElement("li");
  liEl.classList.add("list-group-item");
  liEl.setAttribute("id", id);
  liEl.textContent = string;
  return liEl;
}

function createCard(data) {
  console.log(data);
}

function loadInfo(data) {}

export { createListGroupItem, createCard, loadInfo };
