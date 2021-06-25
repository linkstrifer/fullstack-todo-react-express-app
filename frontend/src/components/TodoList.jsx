import { ListGroup } from "react-bootstrap";

function TodoList({ todos, onTodoClicked }) {
  return (
    <ListGroup>
      {todos.map(({ label, completed, _id, updated }) => {
        let variant = "";

        if (!updated) {
          variant = "warning";
        } else if (completed) {
          variant = "success";
        }

        return (
          <ListGroup.Item
            key={_id}
            variant={variant}
            onClick={() => onTodoClicked(_id)}
          >
            {label}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TodoList;
