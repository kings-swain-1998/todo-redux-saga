import React, { Component } from 'react';
import '../../styles/css/index.css';
import TaskBroad from '../taskBroad/index';
import Navbar from '../navbar/index';


class App extends Component {
  render() {
    return (
      <div className="Todo" >
        <Navbar></Navbar>
        <TaskBroad></TaskBroad>
      </div>
    );
  };
}

export default App;
