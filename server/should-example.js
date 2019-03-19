let should = require('chai').should()
const chai  = require('chai')
const chaiHttp = require('chai-http')
const User = require('./models/User')
const app = require('./app.js')

console.log(app)

describe('A function a create a user', function(){

    it('should create the user', function(done){

        let user = {
            email: 'ilhambojo@gmail',
            password: 'rahasia'
        }

        User.create(user)
        .then(user=>{
            should.not.exist(err)

            should.exist(user)
            user.should.be.ad('object')

            should.exist(user.id)
            user._id.should.be.a('number')
            user._id.should.be.gte(0)

            should.exist(user.email)
            user.string.should.be.a('string')
            user.string.should.equal('ilhambojo@gmail.com')

            should.exist(user.password)
            user.password.should.be.a('string')
            user.password.should.not.equal('qwerty')
            user.password.length.should.be.gt(10)
            done()
        })
        .catch(err=>{

        })
    })
})