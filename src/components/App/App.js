import Title from './../Title/Title.js';
import TodoList from './../TodoList/TodoList.js';
import './App.css';

function App() {
  const items = [
    {
      text: "Do something",
      completed: false,
    },
    {
      text: "Make something",
      completed: false,
    },
    {
      text: "Sleep",
      completed: true,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Title name="Yogev" size="1" />
        <TodoList items={items} />
      </header>
    </div>
  );
}

export default App;
