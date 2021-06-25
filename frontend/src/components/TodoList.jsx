import { ListGroup } from "react-bootstrap";

function TodoList({ todos, onTodoClicked }) {
  return (
    <ListGroup>
      {todos.map(({ label, completed, _id, updated, createdDate }) => {
        let variant = "";
        const date = new Date(createdDate).toLocaleString("es-CO", {
          timezone: "UTC",
        });

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
            <div>{label}</div>
            <small>{date}</small>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TodoList;
