import { useState } from "react";

export default function usePersistedState(stateKey, initialState) {
    const [state, setState] = useState(() => {
        const persistedStateJson = localStorage.getItem(stateKey);
        if(!persistedStateJson){
            return typeof initialState === 'function' 
                ? initialState() 
                : initialState;
        }

        const persistedState = JSON.parse(persistedStateJson);

        return persistedState;
    });

    const setPersistedState = (input) => {
        // TODO: todo update local storage
        const data = typeof input === 'function' 
            ? input(state) 
            : input;

        const presistedData = JSON.stringify(data);

        localStorage.setItem(stateKey, presistedData);

        setState(data);
    }

    return [
        state,
        setPersistedState, 
    ]
}