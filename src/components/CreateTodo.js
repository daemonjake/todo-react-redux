import React from 'react';

import {connect} from 'react-redux';
import {createTodo} from '../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {message: ''};
    }

    handleClick() {
        this.props.onClicked(this.state.message);

        this.reset();
    }

    handleChange(value) {
        this.setState({message: value});
    }

    reset() {
        this.setState({message: ''});
    }

    render() {
        return (
            <div data-test="TextField">
                <TextField
                    id="TextField"
                    hintText="Example todo"
                    value={this.state.message}
                    onChange={(_, value) => this.handleChange(value)}/>
                <div data-test="Button">
                    <RaisedButton
                        label="Add Todo"
                        primary={true}
                        onClick={() => this.handleClick()} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onClicked: msg => dispatch(createTodo(msg))
});

export default connect(null, mapDispatchToProps)(CreateTodo);
