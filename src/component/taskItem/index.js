import React, { Component } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import '../../styles/css/index.css';

class TaskItem extends Component {
    render() {
        const { task, status } = this.props;
        return (
            <div className="todo-task__container">
                <h4>{task.title}</h4>
                <p>{status.lable}</p>
                <p>{task.description}</p>
                <span className="todo-task__group">
                    <DeleteForeverIcon className="todo-task__icon todo-task__icon--mr"></DeleteForeverIcon>
                    <EditIcon className="todo-task__icon"></EditIcon>
                </span>
            </div>
        )
    }
}

export default TaskItem;