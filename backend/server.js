const express = require('express')
const bodyParser = require('body-parser')

const TodoModel = require('./models/todo')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todo', async (request, response) => {
  const { label, completed } = request.body;

  try {
    await TodoModel.create({ label, completed })
    
    response.json({ created: true })
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.get('/todos', async (request, response) => {
  try {
    const todos = await TodoModel.find({})

    response.json({ todos })
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.put('/todo/:id', async (request, response) => {
  const { completed } = request.body
  const { id } = request.params

  try {
    const todo = await TodoModel.findById(id)

    if (todo) {
      todo.completed = completed !== undefined ? completed : false

      console.log({ todo })

      await todo.save()

      response.json({ updated: true })
    } else {
      response.status(404).json({ message: 'todo not found' })
    }
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
