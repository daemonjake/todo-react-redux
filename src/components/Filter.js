import React from 'react';

import {connect} from 'react-redux';
import {setFilter} from '../actions';
import {Tabs, Tab} from 'material-ui/Tabs';

class Filter extends React.Component {
    handleActive(filter) {
        this.props.setFilter(filter);
    }

    render() {
        return (
            <div data-test="Tabs">
                <input id="TabsFilter" type="hidden" value={this.props.filter}/>
                <Tabs>
                    <Tab
                        label="All"
                        onActive={this.handleActive.bind(this, 'All')}>
                    </Tab>
                    <Tab
                        label="Active"
                        onActive={this.handleActive.bind(this, 'Active')}>
                    </Tab>
                    <Tab
                        label="Inactive"
                        onActive={this.handleActive.bind(this, 'Inactive')}>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = ({filter}) => ({filter});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
