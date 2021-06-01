import TodoItem from './../TodoItem/TodoItem.js';

function TodoList({items}) {
  return items.length > 0 ? (
    <ul>
      {items.map(
        ({text, completed}) => <TodoItem text={text} completed={completed} />
      )}
    </ul>
  ) : (
    <h3>Nothing to do! :)</h3>
  );
}

export default TodoList;