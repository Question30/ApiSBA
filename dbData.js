async function getAnimeByName(string) {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${string}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getAnimeById(id) {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}

export { getAnimeByName, getAnimeById };
