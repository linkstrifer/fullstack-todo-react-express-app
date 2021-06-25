const mongoose = require('mongoose')
const url = 'mongodb+srv://rinku:sutoriferu@cluster0.iibmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const db = mongoose.connection

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

db.on('error', (error) => console.log('MONGOOSE ERROR', error))
db.once('open', () => console.log('MONGOOSE CONNECTED'))

module.exports = mongoose
