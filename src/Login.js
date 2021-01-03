import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"
                    alt="Slack Logo"
                />
                <h1>Sign In</h1>
                <p>slack.com</p>
                <Button>Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;