import { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import { Form, Button } from 'react-bootstrap'

import TodoList from './components/TodoList'

const apiUrl = 'https://arcane-basin-04555.herokuapp.com'

function searchTodo(list, id, updated = false) {
  const newTodos = [...list]
  const todo = newTodos.find(
    ({ _id }) => _id === id
  )

  if (todo && !updated) {
    todo.completed = !todo.completed
  }
  
  todo.updated = updated

  return newTodos
}

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios({
      url: `${apiUrl}/todos`,
    }).then(({data: { todos }}) => {
      if (todos) {
        this.setState({
          todos: todos.map(todo => ({...todo, updated: true})) 
        })
      }
    })
  }

  addTodo = (label) => {
    const newTodos = [...this.state.todos]

    if (label) {
      axios.post(`${apiUrl}/todo`, { label })
        .then(({ data: { todo } }) => {
          this.setState({
            todos: [
              ...newTodos,
              {...todo, updated: true}
            ]
          })
        })
    }
  }

  updateTodo = (id) => {
    const { todos } = this.state

    axios.put(`${apiUrl}/todo/${id}`)
      .then(({ data: { updated } }) => {
        if (updated) {
          this.setState({
            todos: searchTodo(todos, id, true)
          })
        }
      })

    this.setState({
      todos: searchTodo(todos, id)
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div className="App">
        <TodoList todos={todos} onTodoClicked={this.updateTodo} />

        <Form onSubmit={(event) => {
          event.preventDefault()
          const { todo } = event.target

          this.addTodo(todo.value)
          todo.value = ''
        }}>
          <Form.Group controlId="todo">
            <Form.Label>Todo</Form.Label>
            <Form.Control type="text" placeholder="Todo" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Crear TODO
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
