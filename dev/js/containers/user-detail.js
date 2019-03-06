import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        if(!this.props.user){
            return(
                <h4>Select a user...</h4>
            );
        } else {
            return (
                <div>
                    <img src={this.props.user.thumbnail} />
                    <h2>Name: {this.props.user.first} {this.props.user.last}</h2>
                    <h3>Age: {this.props.user.age}</h3>
                    <p>Description: {this.props.user.description}</p>
                </div>
                );
        }
    }
}

function mapStateToProps(state) {
    // Takes piece of data and passes into component as a property
    return {
        user: state.activeUser //from reducer>index
    };
}

export default connect(mapStateToProps)(UserDetail);