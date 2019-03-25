const app = require('../app')

// Require the dev-dependecies
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()
// const should = require('chai').should()

chai.use(chaiHttp)
// Our parent block

describe('Users', ()=> {
    beforeEach((done) => { // Before each test we empty the database 
        User.remove({}, (err) => {
            done()
        })
    })
})


// Tes the /Post User/Register route

describe('/Post user', ()=> {
    it('it should POST a user', () => {
        chai.request(app)
            .post('/user/signup')
            .send({
                email: 'ilhambojo@gmail.com',
                password: 'rahasia'
            })
            .then(function(response){
                console.log(response.body)
                response.should.have.status(201)
                response.body.should.be.an('object')
                response.body.should.have.property('email')
                response.body.should.have.property('password')
            })
            .catch(err=>{
                console.log(err)
            })
    })
})

// Login
describe('/Post login user', ()=> {
    it('it should post a user', () => {
        chai.request(app)
            .post('/user/signin')
            .send({
                email: 'ilhambojo@gmail.com',
                password: 'rahasia'
            })
            .then(function(response){
                console.log(response.body)
                response.should.have.status(201)
                response.body.should.be.an('object')
                response.body.should.have.property('email')
                response.body.should.have.property('password')
            })
            .catch(err=>{
                console.log(err)
            })
    })
})


// Test the /GET User route

describe('/Get user', ()=> {
    it('it should GET all the users', () => {
        chai.request(app)
            .get('/user/getAll')
            .then(function(response) {
                console.log(response.body, 'ini get user')
                response.should.have.status(200)
                response.body.should.be.an('array')
                // response.body.length.should.be.eql(0)
            })
            .catch(err=>{
                console.log(err)
            })
    })
})

// =====================================================================
let productId = ''

describe('/Post Product', ()=> {
    it('it should Post a Product', ()=> {
        chai.request(app)
            .post('/product/create')
            .send({
                name: 'Sepatu Converse',
                price: 120000,
                stock: 20
            })
            .then(function(response) {
                productId = response.body._id
                console.log(response.body, 'ini post product')
                response.should.have.status(201)
                response.body.should.be.an('object')
            })
            .catch(err=>{
                console.log(err)
            })
    })
})

describe('/Get Product', ()=> {
    it('it should Get a Products', ()=> {
        chai.request(app)
            .get('/product')
            .then(function(response){
                console.log(response.body, 'ini get product')
                response.should.have.status(200)
                response.body.should.be.an('array')
            })
            .catch(err=>{
                console.log(err)
            })
    })
})

describe('/Delete a Product', ()=>{
    it('it should delete a Product', ()=> {
        chai.request(app)
            .delete(`/products/${productId}`)
            .then(function(response){
                response.should.have.status(200)
            })
            .catch(err=>{
                console.log(err)
            })
    })
})