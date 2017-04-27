export default class Pokemon {
    constructor (id = '', name = '', height = 0, weight = 0, moves = [], sprite = '') {
        this.id = id
        this.name = name
        this.height = height
        this.weight = weight
        this.moves = moves
        this.sprite = sprite
    }
}
