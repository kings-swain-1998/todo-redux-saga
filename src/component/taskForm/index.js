import React, { Component } from "react";
import '../../styles/css/index.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class TaskForm extends Component {
    render() {
        const {open, handleClose} = this.props;
        return (
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
                <DialogContent>
                <TextField id="standard-basic" label="Standard" />
                <TextField id="standard-basic" label="Standard" />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleClose}>
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default TaskForm;