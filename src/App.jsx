import React from 'react';
import TodoList from './components/TodoList/TodoList';


const App = () => {
  return (
  <div>
    <div className= 'container-md p-3 mb-2 bg-transparent text-dark'>
        <h1 className='text-center p-3 mb-2 bg-primary text-white'>App To Do</h1>
        <TodoList className="todo-list"></TodoList>
    </div>
  </div>
  );
};

export default App;
