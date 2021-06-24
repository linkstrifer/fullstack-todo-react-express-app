const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// add todos
// get todos
// update todos

app.post('/todo', (request, response)=>{
  response.send('working')
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
