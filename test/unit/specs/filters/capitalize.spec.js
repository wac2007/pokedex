import capitalize from '@/filters/capitalize'

describe('Capitalize Filter', () => {
  it('Deve tornar a primeira letra da string maiúscula', () => {
    expect(capitalize('test')).to.equal('Test')
  })
  it('Deve falhar ao passar um número', () => {
    expect(capitalize.bind(capitalize, 0)).to.throw()
  })
  it('Deve falhar ao passar um array', () => {
    expect(capitalize.bind(capitalize, [])).to.throw()
  })
  it('Deve falhar ao passar um objeto', () => {
    expect(capitalize.bind(capitalize, {})).to.throw()
  })
  it('Deve falhar ao passar uma função', () => {
    let myFunc = function () { return '' }
    expect(capitalize.bind(capitalize, )).to.throw()
  })
})
