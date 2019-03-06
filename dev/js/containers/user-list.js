import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions'; // index grabbed



class UserList extends Component {
    
    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first} {user.last}
                </li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
};

function mapStateToProps(state) {
    // Takes piece of data and passes into component as a property
    return {
        users: state.users
    }
}

// passing selectUser action in as a prop
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

// In order to use mapStateToProps we need to connect
export default connect(mapStateToProps, matchDispatchToProps)(UserList);