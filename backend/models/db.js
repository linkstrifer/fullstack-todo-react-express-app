const mongoose = require('mongoose')
const url = process.env.DB || 'mongodb://localhost:27017/todos'

const db = mongoose.connection

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

db.on('error', (error) => console.log('MONGOOSE ERROR', error))
db.once('open', () => console.log('MONGOOSE CONNECTED'))

module.exports = mongoose
