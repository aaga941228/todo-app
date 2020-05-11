const mongoose = require('mongoose')

module.exports = async function connection() {
    let db
    try {
        db = await mongoose.connect('mongodb://localhost:27017/todo-app', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('db connected successfully')
      } catch (error) {
        console.error(error)
      }
    return db
}