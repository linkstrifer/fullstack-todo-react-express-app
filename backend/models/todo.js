const mongoose = require('./db')

const todoSchema = mongoose.Schema({
  label: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

const TodoModel = mongoose.model('Todo', todoSchema)

module.exports = TodoModel
