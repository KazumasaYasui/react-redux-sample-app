import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { postEvent } from '../actions';
import { Link } from 'react-router-dom';

class EventsNew extends Component {
    render() {
        return (
            <React.Fragment>
                <div>hoge</div>
            </React.Fragment>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     postEvent: () => dispatch(postEvent())
// })

export default connect(null, null)(EventsNew)