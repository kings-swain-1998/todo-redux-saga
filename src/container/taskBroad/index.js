import React, { Component } from 'react';
import '../../styles/css/index.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { STATUS } from '../../constants/index';
import TaskList from '../../component/taskList';
import TaskForm from '../../component/taskForm';




class taskBroad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            open: false
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/task")
            .then(res => {
                this.setState({
                    tasks: res.data
                })
            })
    }

    renderTask = () => {
        const { tasks } = this.state;
        return STATUS.map((status, i) => {
            const taskFilter = tasks.filter(task => { return task.status === status.value });
            return <TaskList tasks={taskFilter} status={status} key={i}></TaskList>
        })
    }
    renderForm = () => {
        const { open } = this.state;
        return <TaskForm open={open} handleClose={this.handleClose}></TaskForm>
    };

    handleClose = () => {
        this.setState({
            open : !this.state.open
        })
    };


    render() {

        return (
            <div className="todo-task" >
                <Button variant="contained" color="primary" onClick={this.handleClose}>
                    <AddIcon></AddIcon>
                    Add Task
                </Button>
                <div className="todo-task__list">
                    {this.renderTask()}
                    {this.renderForm()}
                </div>
            </div>
        );
    };
}

export default taskBroad;
