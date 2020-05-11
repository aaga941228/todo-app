module.exports = function() {
    const db = require('../libs/db-connection')
    const { Schema } = require('mongoose')

    const Task = new Schema({
        title: String,
        description: String,
        status: Boolean
    })

    return db.model('task', Task)
}