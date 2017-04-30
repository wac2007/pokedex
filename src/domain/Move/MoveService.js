export default class MoveService {
  constructor (resource) {
    this._resource = resource('move/{name}')
  }

  fetchMove (name) {
    return this._resource
      .get({ name })
      .then(res => res.json())
      .catch(err => {
        console.log('Error Getting Move from from Server', err)
        throw new Error('Could not Get Move from server')
      })
  }

  getMove (name) {
    return new Promise((resolve, reject) => {
      let moveData = localStorage.getItem('moveData')
      if (moveData) {
        moveData = JSON.parse(moveData)
        let move = moveData[name]
        if (move) {
          resolve(move)
        } else {
          this.fetchMove(name)
            .then(move => {
              moveData[name] = move
              localStorage.setItem('moveData', JSON.stringify(moveData))
              resolve(move)
            })
        }
      } else {
        this.fetchMove(name)
          .then(move => {
            moveData = {}
            moveData[name] = move
            localStorage.setItem('moveData', JSON.stringify(moveData))
            resolve(move)
          })
      }
    })
  }
}
