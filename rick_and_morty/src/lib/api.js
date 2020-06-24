const uri = 'https://rickandmortyapi.com/api/character/';

async function getAllCharacters() {
  const response   = await fetch(`${uri}`);
  const parsedJson = await response.json();

  return parsedJson.results;
}

// async function getCharacterById(id) {
//   const response   = await fetch(`${uri}id`)
//   const parsedJson = await response.json();
// }

export default {
  getAllCharacters,
  // getCharacterById
}