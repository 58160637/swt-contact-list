const request = require('supertest');
const app = require('../server');

test('simple test',()=>{
  expect(1).toEqual(1);
})








describe('DELETE /contacts/:id',()=>{
  it('Should return 204',(done)=>{
    request(app).delete('/contacts/:11')
      .set('Accept','application/json')
      .expect(204)
      .then((res)=>{
        //let contact = res.body
        //expect(contact.length).toBe(11)
        done()
      })
  })
})
