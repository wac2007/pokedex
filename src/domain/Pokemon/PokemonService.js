export default class PokemonService {
  constructor (resource) {
    this._resource = resource('pokemon{/id}{/name}')
  }

  list (offset) {
    return this._resource
      .get({offset})
      .then(res => res.json())
      .catch(err => {
        console.log(err)
        throw new Error('Não foi possível obter os Pokémons')
      })
  }

  search (id) {
    return this._resource
      .get({ id })
      .then(res => res.json())
  }
}
