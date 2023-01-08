// REQUIREMENTS
const mongoose= require('mongoose')
//creating shorthand for Schema constructor 
const {Schema} = mongoose 

//define schema using schema constructor 
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean ,
  image: { type: String, default: 'http://placehold.it/500x500.png' }
})


//creating model
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread