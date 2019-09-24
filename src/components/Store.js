import React from 'react';

export const CTX = React.createContext();

const initState = {
    general : [
        {from: 'Vale', msg: 'hello'},
        {from: 'Mike', msg: 'hello'},
        {from: 'John', msg: 'hello'}
    ],
    topic2 : [
        {from: 'Vale', msg: 'hello guys'},
        {from: 'Ken', msg: 'hello guys'},
        {from: 'Ryu', msg: 'hello guys'}
    ]
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
               [topic] : [
                   ...state[topic],
                   {
                       from: from,
                       msg: msg
                   }
               ]
            }
            default :
            return state
    }
}

export default function Store(props) {

    const reducerHook = React.useReducer(reducer, initState)

    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    );
};

