import React from 'react';
import { authentication, provider } from '../../Config/firebase';
import { actionTypes } from '../../Provider/reducer';
import { useStateValue } from '../../Provider/stateProvider';
import { Button } from '@material-ui/core';
import { faceBookLogo } from '../../Assets/AssetExport';
import './Login.css';

function Login() {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        authentication
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                console.log(result);
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src={faceBookLogo}
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
