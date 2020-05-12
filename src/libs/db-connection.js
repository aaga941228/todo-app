const mongoose = require('mongoose')
const config = require('../config')

module.exports = async function connection() {
    let db
    try {
        db = await mongoose.connect(config.uri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('db connected successfully')
      } catch (error) {
        console.error(error)
      }
    return db
}