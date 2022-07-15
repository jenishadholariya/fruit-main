import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utitlity/Index';

function Privateroute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                :
                <Redirect to='/Contact' />
        )

        }

        />
    );
}

export default Privateroute;