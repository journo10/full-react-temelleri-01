import React, { createContext, useReducer } from 'react';
import { todosReducer } from '../reducers/todosReducer';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, [
        { id: 1, text: 'Aile gezisini planlayın' },
        { id: 2, text: 'Akşam yemeği için alışverişe git' },
        { id: 3, text: 'Yürüyüşe çıkmak' }
    ]);

    return (
        <TodoListContext.Provider value={{ todos, dispatch }} >
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;













