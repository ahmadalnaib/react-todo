import React from 'react';
import Todos from './Todos';
import AddForm from './AddForm';
import './App.css';

class App extends React.Component {

  state={
    todos:[
      {id:1,content:'learn js'},
      {id:2,content:'learn larave'}
    ]
  }

  deleteTodo=(id)=>{
      const todos=this.state.todos.filter(todo =>{
        return todo.id !==id
      });
      this.setState({
        todos
      })
  }


  addTodo= (todo) =>{
 todo.id=Math.random()
 let todos=[...this.state.todos,todo]
 this.setState({
   todos
 })
  }
  render(){
  return (
    <div className="App conatiner">
     <h1 className="text-center text-blue">Todos</h1>
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     <AddForm addTodo={this.addTodo}/>
    </div>
  );
}
}
export default App;
