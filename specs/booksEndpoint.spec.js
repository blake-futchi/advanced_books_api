const app = require('../app')
const supertest = require('supertest')
const expect = require('chai').expect
const jsonResponse = require('./jsonResponse')

let server, request, response

before((done) => {
  server = app.listen(done)
  request = supertest.agent(server)
})

after((done) => {
  server.close(done)
})

describe('GET /api/vi/books', () => {
  before(async () => {
    response = await request.get('/api/v1/books')
  })

  it('responds with status 200', () => {
    expect(response.status).to.equal(200)
  });

  it('responds with list of books as an array', () => {
    expect(response.body.books).to.be.an('array')
  });

  it('returns title for books', () => {
    expect(response.body.books[0].title).to.equal('Learning node with Blake')
  });
});

describe('GET /api/v1/books/:id', () => {
  before (async () => {
    response = await request.get('/api/v1/books/3')
  })

  it('responds with a single book', () => {
    expect(response.body.book.id).to.equal(3)
  })
});