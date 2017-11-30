const request = require('supertest');
const app = require('../server');


test('simple test',()=>{
  expect(1).toEqual(1);
})


describe('GET/contacts',()=>{
  it('should return 200 OK status with proper collection',(done)=>{
    request(app).get('/contacts')
    .set('Accept','application/json')
    .expect(200)
    .then((res)=>{
      let contacts = res.body
      expect(contacts instanceof Array).toBeTruthy()
      expect(contacts[0].id).toBeDefined()
      expect(contacts[0].name).toBeDefined()
      expect(contacts[0].email).toBeDefined()
      expect(contacts[0].phone).toBeDefined()
      expect(contacts[0].url).toBeDefined()
      expect(contacts[0].notes).toBeDefined()
      done()
    })
  })
})
