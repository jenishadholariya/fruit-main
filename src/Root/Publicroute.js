import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utitlity/Index';

function Publicroute({component:Component ,restricted=false, ...rest}) {
    return (
        <Route {...rest} render={props=>(
            isLogin() && restricted ?
            <Redirect to='/Home'/>

            :
            <Component {...props}/>
        )
        }
          
        />
    );
}

export default Publicroute;