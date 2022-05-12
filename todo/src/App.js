import React, { Component } from 'react';

// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Adam",
            todoItems: [{ action: "Buy flowers", done: false}],
            newItemText: ""
        }
    }

    updateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value})
    }

    createNewTodo = () => {
        if (this.state.newItemText !== "" && !this.state.todoItems.find(item => item.action === this.state.newItemText)) {
            this.setState({
                todoItems: [...this.state.todoItems,
                    {action: this.state.newItemText, done: false}],
                newItemText: ""
            });
        }
    }

    toggleTodo = (event) => {
        this.setState({todoItems: this.state.todoItems.map(item => {
            if (item.action === event.target.value) {
                item.done = !item.done;
            }
            return item;
            })})
    }

    todoTableRows = () => {
        return this.state.todoItems.map(item => <tr><td>{item.action}</td><td><button value={item.action} onClick={this.toggleTodo}>{item.done.toString()}</button></td></tr>)
    }

    render = () =>
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                { this.state.userName }'s To Do List
                ({ this.state.todoItems.filter(item => item.done === false).length} items to do)
            </h4>
            <div className="container-fluid">
                <div className="my-1">
                    <input className="form-control" value={ this.state.newItemText } onChange={ this.updateNewTextValue } />
                    <button className="btn btn-primary mt-1" onClick={ this.createNewTodo }>ADD</button>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{ this.todoTableRows() }</tbody>
                </table>
            </div>
        </div>
}
