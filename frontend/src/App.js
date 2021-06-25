import { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button } from 'react-bootstrap'

import TodoList from './components/TodoList'

class App extends Component {
  state = {
    todos: [
      {
        label: "TODO 1",
        completed: false,
      },
      {
        label: "TODO 2",
        completed: false,
      },
      {
        label: "TODO 3",
        completed: true,
      },
    ]
  }

  addTodo = (label) => {
    const newTodos = [...this.state.todos]

    if (label) {
      this.setState({
        todos: [...newTodos, { label, completed: false }]
      })
    }
  }

  updateTodo = (label) => {
    const newTodos = [...this.state.todos]
    const todo = newTodos.find(currentTodo => currentTodo.label === label)

    if (todo) {
      todo.completed = !todo.completed
    }

    this.setState({
      todos: newTodos
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
