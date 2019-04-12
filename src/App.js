import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';
import {connect} from "react-redux";


class App extends Component {

  constructor(props){
    super(props);

    this.taskText = React.createRef();
    this.submitAddTaskHandler = this.submitAddTaskHandler.bind(this);
  }

  render() {

    const {tasks}  = this.props;

    return (
      <div className="App">

        <form action="" onSubmit={this.submitAddTaskHandler}>
          <input type="text" ref={this.taskText}/>
          <button>Add</button>
        </form>

        <ul>
          {
            tasks.map(el => (
                <li key={el.title}>{ el.title }</li>
            ))
          }
        </ul>

      </div>
    );
  }

  submitAddTaskHandler(e){
    e.preventDefault();

    const {onAddTask} = this.props;
    const taskText = this.taskText.current.value;

    onAddTask(taskText);

    this.taskText.current.value = "";
  }
}

export default connect(
    state => ({tasks: state}),
    dispatch => ({
      onAddTask: (title) => {dispatch({type:"ADD_TASK",payload:title})}
    })
)(App);

App.propTypes = {
  tasks: PropTypes.array.isRequired
};
