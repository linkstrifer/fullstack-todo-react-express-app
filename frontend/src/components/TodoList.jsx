import { ListGroup } from "react-bootstrap";

function TodoList({ todos, onTodoClicked }) {
  return (
    <ListGroup>
      {todos.map(({ label, completed, _id }) => (
        <ListGroup.Item
          key={_id}
          variant={completed ? "success" : ""}
          onClick={() => onTodoClicked(_id)}
        >
          {label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
