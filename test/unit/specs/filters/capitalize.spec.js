import capitalize from '@/filters/capitalize'

describe('Capitalize Filter', () => {
  it('Deve tornar a primeira letra da string maiúscula', () => {
    expect(capitalize('test')).to.equal('Test')
  })
  it('Deve falhar ao passar um número', () => {
    expect(() => { capitalize(2) }).to.throw()
  })
  it('Deve falhar ao passar um array', () => {
    expect(() => { capitalize([]) }).to.throw()
  })
  it('Deve falhar ao passar um objeto', () => {
    expect(() => { capitalize({}) }).to.throw()
  })
  it('Deve falhar ao passar uma função', () => {
    let myFunc = function () { return '' }
    expect(() => { capitalize(myFunc) }).to.throw()
  })
  it('Deve falhar ao nao passar nada', () => {
    expect(() => { capitalize() }).to.throw()
  })
})
