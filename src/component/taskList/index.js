import React, { Component } from "react";
import '../../styles/css/index.css';
import TaskItem from '../taskItem/index';

class TaskList extends Component {
    render() {
        const { tasks, status } = this.props;
        return (
            <div key={tasks.id} className="todo-task__item">
                <h3 className="todo-task__title">{status.lable}</h3>
                {tasks.map((task, i) => {
                    return (
                        <TaskItem task={task} status={status} key={i}></TaskItem>
                    )
                })}
            </div>
        )
    }
}

export default TaskList;