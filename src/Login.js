import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from './firebase';

function Login() {
    
    /*
    const signIn = (e) => {
        e.preventDefault();
    }
    */

    const signIn = () => {
        /*
            Auth dot sign in with pop up and pass provider
            Then when you get the results back
            If there is an error, catch it and render an alert message showing the error message

            Firebase 
                -- Authentication
                -- Get started
                -- Sign-in method
                -- Google
                -- Enable
                -- taf.mandava@gmail.com
                -- Save
                -- Go back to React App
        */
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                alert(error.message);
            });
    };   

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"
                    alt="Slack Logo"
                />
                <h1>Sign in to Slack</h1>
                <p>slack.com</p>
                <Button onClick={signIn}> Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;