import React, { Component } from 'react'

class AddForm extends Component {

state={
  content:''

}

handleChange=(e) =>
{
this.setState({
  content:e.target.value
})
}

handleSubmit=(e)=>{

this.props.addTodo(this.state)
this.setState({
  content:''
})
  e.preventDefault();
}

  render()
  {
    return(
      <div className="container  p-3">
        <form className="form-group" action="" onSubmit={this.handleSubmit}>
          <input className="form-control" type="text" onChange={this.handleChange} placeholder="add new todo" value={this.state.content}/>
         
        </form>
      </div>
    )
  }
}

export default AddForm;