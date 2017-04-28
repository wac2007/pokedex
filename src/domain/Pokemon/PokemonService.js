export default class PokemonService {
  constructor (resource) {
    this._resource = resource('pokemon/{name}')
  }

  // Fetch All Pokémons from server
  scrapData (offset = 0, pokemonArray = []) {
    return this._resource
      .get({ offset })
      .then(res => res.json())
      .then(res => {
        pokemonArray = pokemonArray.concat(res.results)
        if (res.results && res.next) {
          return this.scrapData(offset + res.results.length, pokemonArray)
        } else {
          return pokemonArray
        }
      })
      .then(pokemonArray => {
        return pokemonArray
      })
      .catch(err => {
        console.log('Error Scraping Pokémons', err)
        throw new Error('Could not scrap Pokémons')
      })
  }

  // Get Pokémons from Cache or Load from server
  listPokemons (offset, name) {
    const limit = 20
    return new Promise((resolve, reject) => {
      let pokemonArray = localStorage.getItem('pokemonArray')
      if (pokemonArray) {
        pokemonArray = JSON.parse(pokemonArray)
        if (offset) {
          pokemonArray = pokemonArray.slice(offset, offset + limit)
        }
        resolve(pokemonArray)
      } else {
        this.scrapData()
          .then(pokemonArray => {
            localStorage.setItem('pokemonArray', JSON.stringify(pokemonArray))
            if (offset) {
              pokemonArray = pokemonArray.slice(offset, offset + limit)
            }
            resolve(pokemonArray)
          })
          .catch(err => {
            console.log('Error listing Pokémons')
            reject(err)
          })
      }
    })
  }

  fetchPokemon (name) {
    return this._resource
      .get({ name })
      .then(res => res.json())
      .catch(err => {
        console.log('Error Getting Pokémon from Server', err)
        throw new Error('Could not Get Pokémon from server')
      })
  }

  getPokemon (name) {
    return new Promise((resolve, reject) => {
      let pokemonData = localStorage.getItem('pokemonData')
      if (pokemonData) {
        pokemonData = JSON.parse(pokemonData)
        let pokemon = pokemonData[name]
        if (pokemon) {
          resolve(pokemon)
        } else {
          this.fetchPokemon(name)
            .then(pokemon => {
              pokemonData[name] = pokemon
              localStorage.setItem('pokemonData', JSON.stringify(pokemonData))
              resolve(pokemon)
            })
        }
      } else {
        this.fetchPokemon(name)
          .then(pokemon => {
            pokemonData = {}
            pokemonData[name] = pokemon
            localStorage.setItem('pokemonData', JSON.stringify(pokemonData))
            resolve(pokemon)
          })
      }
    })
  }
}
