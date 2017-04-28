export default class PokemonService {
  constructor (resource) {
    this._resource = resource('pokemon{/name}')
  }

  listPokemons (offset, name) {
    return this._resource
      .get({offset, name})
      .then(res => res.json())
      .catch(err => {
        console.err('Error retrieving Pokémons', err)
        throw new Error('Could not get Pokémons')
      })
  }
}
