import divide from '@/filters/divide'

describe('Divide Filter', () => {
  it('Deve dividir o primeiro numero pelo segundo', () => {
    expect(divide(10, 2)).to.equal(5)
  })
  it('Deve falhar ao dividir por zero', () => {
    expect(() => { divide(10, 0) }).to.throw()
  })
})
