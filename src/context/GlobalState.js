import React, {createContext, useReducer} from 'react';

// initial State 
const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
};

// Create Gobal Context 
export const GlobalCentext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children })=> {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    return (<GlobalCentext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalCentext.Provider>)
}