const request = require('supertest');
const app = require('../server');

test('simple test',()=>{
  expect(1).toEqual(1);
})































describe('POST /contacts',()=>{
  it('Should return 201',(done)=>{
    request(app).post('/contacts')
      .send({name : 'Waramporn Yangkijkarn',email : "58160637@go.buu.ac.th", phone : "123-456-7890",url :"www.github.com/58160637",notes:"final make me wanna die"})
      .set('Accept','application/json')
      .expect(201)
      .then((res)=>{
        let contact = res.body
        expect(contact.id).toBeDefined()
        //expect(contact.id).toBe(12)
        expect(contact.name).toBe('Waramporn Yangkijkarn')
        expect(contact.email).toBe('58160637@go.buu.ac.th')
        expect(contact.phone).toBe('123-456-7890')
        expect(contact.url).toBe('www.github.com/58160637')
        expect(contact.notes).toBe('final make me wanna die')

        done()
      })
  })
})


describe('PUT /contacts/:id',()=>{
  it('Should return 200',(done)=>{
    request(app).put('/contacts/11')
      .send({name : 'Waramporn Yangkijkarn',email : "58160637@go.buu.ac.th", phone : "123-456-7890",url :"www.github.com/5816063",notes:"final make me wanna die"})
      .set('Accept','application/json')
      .expect(200)
      .then((res)=>{
        //let contacts = res.body
        //expect(contacts[0]).toBeDefined()
        //expect(contacts[11].name).toBe('Waramporn')
        done()
      })
  })
})


describe('DELETE /contacts/:id',()=>{
  it('Should return 204',(done)=>{
    request(app).delete('/contacts/11')
      .set('Accept','application/json')
      .expect(204)
      .then((res)=>{
        //let contacts = res.body
        //expect(contacts[11]).toBeUndefined()
        //expect(contact.length).toBe(11)
        done()
      })
  })
})
