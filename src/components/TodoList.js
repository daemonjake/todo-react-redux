import React from 'react';

import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import {List} from 'material-ui/List';

import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <div data-test="List">
                <List>
                    {
                        this.props.todos.map(todo =>
                            <Todo key={todo.uid} {...todo} />
                        )
                    }
                </List>
            </div>
        );
    }
}

const getTodos = (todos, filter) => {
    switch (filter) {
        case 'All':
            return todos;

        case 'Active':
            return todos.filter(({visible}) => visible);

        case 'Inactive':
            return todos.filter(({visible}) => !visible);
    }
};

const mapStateToProps = ({todos, filter}) => ({
    todos: getTodos(todos, filter)
});

const mapDispatchToProps = dispatch => ({
    onTodoClicked: uid => dispatch(toggleTodo(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
