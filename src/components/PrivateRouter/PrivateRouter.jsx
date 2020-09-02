import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isInit} from "../../api/api";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
            isInit()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/requestApi', state: { from: props.location } }} />
    )} />
)

