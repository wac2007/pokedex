import capitalize from '@/filters/capitalize'

describe('Capitalize Filter', () => {
  it('Deve tornar a primeira letra da string maiúscula', () => {
    expect(capitalize('test')).to.equal('Test')
  })
  it('Deve retornar em branco ao passar outro tipo de dados', () => {
    expect(capitalize(2)).to.equal('')
  })
})
