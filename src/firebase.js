/*
    Setup Real-time Database on Firebase
    npm install -g firebase-tools

    Resister App

    </> 
    App nickname : slack-clone
    Also set up Firebase Hosting for this app
    Register app


    Cloud Firestore
    Create database 
    Start in test mode
        rules_version = '2';
        service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
            allow read, write: if
                request.time < timestamp.date(2021, 1, 30);
            }
        }
        }
        
        Use default settings

        Enable

    Connecting to the Firebase backend - We need a config
    Go to Settings - Project settings
    Select Config

    The real-time database is a no sql database. It's just a big json tree but you can't search that tree
    Whereas, in firestore you can search, there is indexing
    Firestore is a hybrid between NoSQL and SQL
*/

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAS8Jb8hApeVoWLde7ElA4Rcc_wOnBqH48",
    authDomain: "slack-clone-2e0a8.firebaseapp.com",
    projectId: "slack-clone-2e0a8",
    storageBucket: "slack-clone-2e0a8.appspot.com",
    messagingSenderId: "756418593645",
    appId: "1:756418593645:web:5fe2207b6cf75b56f51064",
    measurementId: "G-GCN616BYHN"
};

/*
    Connect back-end to front-end
*/
const fibaseApp = firebase.initializeApp(firebaseConfig);

/*
    Get access to the database from any other file 
    Grab everything and pull into the db
*/
const db = fibaseApp.firestore();

/*
    We are goig to create a login page
    Preparing an authentication module
*/
const auth = firebase.auth();
/*
    Creating a provider inorder to get a google 
*/
const provider = new firebase.auth.GoogleAuthProvider();

/*
    Exclusive exports
*/
export {auth, provider}

/*
    Default export since it's used by many files
*/
export default db;