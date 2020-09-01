import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {inited} from "../../api/api";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
            inited()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/requestApi', state: { from: props.location } }} />
    )} />
)

