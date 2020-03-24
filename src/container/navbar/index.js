import React, { Component } from 'react';
import '../../styles/css/index.css';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



class Navbar extends Component {
    render() {
        return (
            <div className="todo-navbar" >
                <h2>TODO-APP</h2>
                <div>
                    <SearchIcon></SearchIcon>
                    <input placeholder="search"></input>
                </div>
                <AccountCircleIcon></AccountCircleIcon>
            </div>
        );
    };
}

export default Navbar;
