import React, {createContext, useState} from 'react'

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [active, setActive] = useState('skillset')
    return(
        <AppContext.Provider value={{navActive: [active, setActive]}}>
            {props.children}
        </AppContext.Provider>
    )
}