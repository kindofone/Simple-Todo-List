function TodoItem({text, completed}) {
  return (
    <li>
      <input type="checkbox" checked={completed}></input>
      <span>{text}</span>
    </li>
  );
}

export default TodoItem;