import React from 'react';
import Divider from 'material-ui/Divider';
import Filter from '../components/Filter';
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';

import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class App extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title="React Redux Todo App"
                    subtitle="By Jacob Wischnat" />
                <CardText>
                    <Filter />
                    <TodoList />
                    <Divider />
                    <CreateTodo />
                </CardText>
            </Card>
        );
    }
}
