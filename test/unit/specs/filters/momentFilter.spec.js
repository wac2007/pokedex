import momentFilter from '@/filters/momentFilter'
// import moment from 'moment'

describe('momentFilter', () => {
  it('Deve formatar uma string de data corretamente', () => {
    let dateString = '2017-05-02T21:11:38.649Z'
    expect(momentFilter(dateString)).to.equal('05/02/2017 18:11:38')
  })
})
