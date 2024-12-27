import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
// this is the data layer.


// Build a provider
export const StateProvider = ({reducer,initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);