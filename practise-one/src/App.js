import React, { Component } from 'react';

import './App.css';

class TodoList extends Component {
   constructor(){
     super();
     this.changeStatus = this.changeStatus.bind(this);
     this.state ={
       tasks: [
        {
          name:'farooq',
          completed: false
        },
      {
          name:'sajid',
          completed: false
        },

        {
          name:'shahid',
          completed: false
        }
       ]
     }  
  }
  
   changeStatus(index){
      var tasks = this.state.tasks;
      var task = tasks[index];
      task.completed = !task.completed;
      this.setState({
        tasks:tasks
      })
     } 

  render() {
    return ( 
      <ul> { 
          this.state.tasks.map((task, index) => {
            return <TodoItem key={task.name} clickHandler = {this.changeStatus}
             index={index}
             detail={task} />
})
}
        </ul> 
    );
  }
}

 class TodoItem extends Component {
   render(){
      return(
      <li onClick = { () =>  { this.props.clickHandler(this.props.index); 
        } }  className  = {this.props.detail.completed ? 'completed' : ''}>
        {this.props.detail.name}
      </li>
    )
 }
 } 


export default TodoList;
