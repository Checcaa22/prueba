import React from 'react';



const Todo = ({todo, eliminarTodo, editarTodo}) => {

   // console.log(todo)

   const {id, nombre, descripcion, estado, prioridad} = todo;

 return (
<>
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            
            < div className="fw-bold">
                {nombre} { estado ? 'finalizado' : 'pendiente'}
            </div>

               <p> {descripcion}</p> 
               <div className="d-grid gap-2 d-md-flex justify-content-md-end position-absolute top-0 end-0">
                     <button className="btn btn-outline-danger me-md-2" type="button" onClick={() => eliminarTodo(id)}>Eliminar</button>
                    <button className="btn btn-outline-warning" type="button" onClick={editarTodo}>Editar</button>
                </div>
            {/* <div>
                <button className="btn btn-danger position-absolute top-0 end-0 "> Eliminar </button>
                <button className="btn btn-warning position-absolute top-0 end-0"> Editar </button>

            </div> */}
        </div>
        
        <span className="badge bg-primary rounded-pill">
            {prioridad && "Prioritario"}         
        </span>
    </li>
</>
  );
};

export default Todo;