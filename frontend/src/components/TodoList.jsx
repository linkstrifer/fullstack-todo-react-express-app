import { ListGroup } from "react-bootstrap";

function TodoList({ todos, onTodoClicked }) {
  return (
    <ListGroup>
      {todos.map(({ label, completed }, index) => (
        <ListGroup.Item
          key={index}
          variant={completed ? "success" : ""}
          onClick={() => onTodoClicked(label)}
        >
          {label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
