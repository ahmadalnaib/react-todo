import React from 'react';
import Todos from './Todos';
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
  render(){
  return (
    <div className="App conatiner">
     <h1 className="text-center text-blue">Todos</h1>
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
}
}
export default App;
