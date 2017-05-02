import divide from '@/filters/divide'

describe('Divide Filter', () => {
  it('Deve dividir o primeiro numero pelo segundo', () => {
    expect(divide(10, 2)).to.equal(5)
  })
  it('Deve falhar ao dividir por zero', () => {
    expect(() => { divide(10, 0) }).to.throw()
  })
  // it('Deve falhar ao passar um array', () => {
  //   expect(() => { capitalize([]) }).to.throw()
  // })
  // it('Deve falhar ao passar um objeto', () => {
  //   expect(() => { capitalize({}) }).to.throw()
  // })
  // it('Deve falhar ao passar uma função', () => {
  //   let myFunc = function () { return '' }
  //   expect(() => { capitalize(myFunc) }).to.throw()
  // })
  // it('Deve falhar ao nao passar nada', () => {
  //   expect(() => { capitalize() }).to.throw()
  // })
})
