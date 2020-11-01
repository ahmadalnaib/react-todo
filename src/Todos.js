import React from 'react'

const Todos = ({todos,deleteTodo}) => {
  const todoList=todos.length ? (
    todos.map((todo)=>{
         return(
          <div className="card" key={todo.id}>
          <div className="card-body">
         <h5 className="card-title">{todo.id}</h5>
         <h5 onClick={() => {deleteTodo(todo.id)}} className="card-text">{todo.content}</h5>
           
           
          </div>
        </div>
         )
    })
  ) :(<p className="text-center">you have no todo left</p>)
  return (
    <div className="todo container">
       {todoList}
    </div>
  )
}

export default Todos
