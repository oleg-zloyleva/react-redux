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
          <h2>Add task</h2>
          <input type="text" ref={this.taskText}/>
          <button>Add</button>
        </form>

        <form action="" onSubmit={this.submitSearchTaskHandler.bind(this)}>
          <h2>Search task</h2>
          <input type="text" ref={(input) => this.searchText = input}/>
          <button>Search</button>
        </form>

        <ul>
          {
            tasks.map((el,i) => (
                <li key={i}>{ el.title }</li>
            ))
          }
        </ul>

      </div>
    );
  }

  submitSearchTaskHandler(e){
    e.preventDefault();
    console.log("submitSearchTaskHandler", this.searchText.value);

    const {onSearchTask} = this.props;
    onSearchTask(this.searchText.value);
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
    state => ({tasks: state.tasksReducer.filter(el => el.title.includes(state.searchTask))}),
    dispatch => ({
      onAddTask: (title) => {dispatch({type:"ADD_TASK",payload:title})},
      onSearchTask: (search) => {dispatch({type:"SEARCH_TASK",payload:search})},
    })
)(App);

App.propTypes = {
  tasks: PropTypes.array.isRequired
};
