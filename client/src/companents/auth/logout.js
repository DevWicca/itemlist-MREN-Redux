import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap'
import { connect } from "react-redux"
import { logout } from '../../actions/authActions'
import propTypes from 'prop-types'

class Logout extends Component {
    static propTypes ={
        logout: propTypes.func.isRequired
    }
    state = {  }
    render() {
        return (
            <Fragment>
                <NavLink onClick={ this.props.logout }>
                Logout
                </NavLink>
            </Fragment>
        );
    }
}

export default connect (null, { logout }) ( Logout );