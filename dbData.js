async function getAnimeByName(string) {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${string}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export { getAnimeByName };
