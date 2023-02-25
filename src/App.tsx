import React, {useEffect, useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  
  const [todo, setTodo] = useState<any[]>([]);
  const [count, setCount] = useState<string>('0');
  const [id, setId] = useState<string>('0');

  const onSaveCount = (count: string) => {
    setCount(count);
  }

  const onSaveId = (id: string) => {
    setId(id);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, [id]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodo(json.slice(0, count)));
  }, [count]);

  return (
    <div className="App">
      <TodoForm onSaveCount={onSaveCount} onSaveId={onSaveId}/>
      <TodoList todo={todo}/>
    </div>
  );
}

export default App;
