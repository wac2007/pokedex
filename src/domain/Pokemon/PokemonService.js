export default class PokemonService {
  constructor (resource) {
    this._resource = resource('pokemon')
  }

  listPokemons (offset) {
    return this._resource
      .get({offset})
      .then(res => res.json())
      .catch(err => {
        console.err('Error retrieving Pokémons', err)
        throw new Error('Could not get Pokémons')
      })
  }
}
