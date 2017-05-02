export default class PokemonSpecieService {
  constructor (resource) {
    this._resource = resource('pokemon-species/{name}')
  }

  fetchPokemonSpecie (name) {
    return this._resource
      .get({ name })
      .then(res => res.json())
      .catch(err => {
        console.log('Error Getting Pokémon Description from Server', err)
        throw new Error('Could not Get Pokémon Description from server')
      })
  }

  getPokemonSpecie (name) {
    return new Promise((resolve, reject) => {
      let pokemonSpecies = localStorage.getItem('pokemonSpecies')
      if (pokemonSpecies) {
        pokemonSpecies = JSON.parse(pokemonSpecies)
        let pokemon = pokemonSpecies[name]
        if (pokemon) {
          resolve(pokemon)
        } else {
          this.fetchPokemonSpecie(name)
            .then(pokemon => {
              pokemonSpecies[name] = pokemon
              localStorage.setItem('pokemonSpecies', JSON.stringify(pokemonSpecies))
              resolve(pokemon)
            }).catch(err => {
              reject(err)
            })
        }
      } else {
        this.fetchPokemonSpecie(name)
          .then(pokemon => {
            pokemonSpecies = {}
            pokemonSpecies[name] = pokemon
            localStorage.setItem('pokemonSpecies', JSON.stringify(pokemonSpecies))
            resolve(pokemon)
          }).catch(err => {
            reject(err)
          })
      }
    })
  }

}
