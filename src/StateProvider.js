import React, { createContext, useContext, useReducer } from 'react';

/* A data layer which we can push information into and pull information from */
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    /* 
        The entire App is wrapped by the StateContext.Provider which is more like the Data layer 
        Our goal is to create a user, push the user into the data layer and access it from anywhere inside the app
        A reducer listens to any kind of action that we shoot to the data layer
    */
    <StateContext.Provider value={ useReducer(reducer, initialState) }>
        {/* App */}
        {children}
    </StateContext.Provider>
);

/* 
    Accessing data from the Data Layer 
*/
export const useStateValue = () => useContext(StateContext);