import React, { Component } from 'react';
import TodoBanner from "./TodoBanner";
import TodoRow from "./TodoRow";
import TodoCreator from "./TodoCreator";

// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Adam",
            todoItems: [{ action: "Buy flowers", done: false}],
        }
    }

    createNewTodo = (text) => {
        this.setState({
            todoItems: [...this.state.todoItems,
                {action: text, done: false}],
        });
    }

    toggleTodo = (todo) => this.setState({todoItems:
            this.state.todoItems.map(item => item.action === todo.action
                ? { ...item, done: !item.done } : item)});


    todoTableRows = () => this.state.todoItems.map(item =>
        <TodoRow key={ item.action } item={ item } toggleTodo={this.toggleTodo}/>
    )

    render = () =>
        <div>
            <TodoBanner name={this.state.userName} items={this.state.todoItems}/>
            <div className="container-fluid">
                <TodoCreator createNewTodo={this.createNewTodo} items={this.state.todoItems}/>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{ this.todoTableRows() }</tbody>
                </table>
            </div>
        </div>
}
