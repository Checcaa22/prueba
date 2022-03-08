import React from 'react';
import Formulario from '../Formulario/Formulario';
import { useState } from 'react';
import Todo from '../Todo/Todo';
import Swal from 'sweetalert2';

const TodoList = () => {

 
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((old) => [...old, todo])
  }

  const eliminarTodo = (id) => {
    Swal.fire(
      'Tarea Eliminada',
      'Se ha eliminado la tarea deseada',
      'success'
    )
    setTodos((old) => old.filter(item => item.id !== id) );
  }

  

  return (
    <>

    <Formulario addTodo={addTodo} ></Formulario>
   <ul className='list-group list-group-numbered'>
     {
      todos.map(item => (
          <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}></Todo>
      ))
     }
    </ul>
    </>
  );
};

export default TodoList;
