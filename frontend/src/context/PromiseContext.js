import React, {useState, createContext} from 'react'


export const PromiseContext = createContext();

export const PromiseContextProvider = (props) => {
    const [context, setContext] = useState([])
    
    return (
        <PromiseContext.Provider value={{context, setContext}}>
            {props.children}
        </PromiseContext.Provider>
    )
}