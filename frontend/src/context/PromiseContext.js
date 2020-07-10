import React, {useState, createContext} from 'react'


export const PromiseContext = createContext();

export const PromiseContextProvider = (props) => {
    const [context, setContext] = useState([])
    
    const addPromise = (newPromise) => {
        setContext([...context, newPromise])
    }
    return (
        <PromiseContext.Provider value={{context, setContext, addPromise}}>
            {props.children}
        </PromiseContext.Provider>
    )
}