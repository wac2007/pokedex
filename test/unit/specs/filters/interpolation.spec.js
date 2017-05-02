import interpolation from '@/filters/interpolation'

describe('interpolation Filter', () => {
  it('Deve interpolar o objeto', () => {
    let obj = {
      'subject': 'book'
    }
    let text = 'The $subject is on the table'
    expect(interpolation(text, obj)).to.equal('The book is on the table')
  })
  it('Não deve interpolar nada, se a variavel for diferente', () => {
    let obj = {
      'subject': 'book'
    }
    let text = 'The $bookName is on the table'
    expect(interpolation(text, obj)).to.equal(text)
  })
  it('Deve falhar ao nao passar um objeto', () => {
    let text = 'The $subject is on the table'
    expect(() => { interpolation(text) }).to.throw()
  })
  it('Deve falhar ao nao passar parâmetros', () => {
    expect(() => { interpolation() }).to.throw()
  })
})
