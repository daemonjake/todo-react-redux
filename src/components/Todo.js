import React from 'react';

import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import {ListItem} from 'material-ui/List';
import IconAssignment from 'material-ui/svg-icons/action/assignment';

class Todo extends React.Component {
    handleClick() {
        this.props.onClicked(this.props.uid);
    }

    render() {
        return (
            <div data-test="Todo" data-value={this.props.msg}>
                <ListItem
                    primaryText={this.props.msg}
                    leftIcon={<IconAssignment />}
                    onClick={this.handleClick.bind(this)} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onClicked: uid => dispatch(toggleTodo(uid))
});

export default connect(null, mapDispatchToProps)(Todo);
