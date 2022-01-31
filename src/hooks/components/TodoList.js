import React, { useEffect, useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Kod yazmak" },
        { id: 2, text: "Spor yapmak" },
        { id: 3, text: "Sinema'ya gitmek" },
    ]);

    const [count, setCount] = useState(0)

    const AddTodo = (newText) => {
        setTodos([
            ...todos,
            { id: Math.random(), text: newText }, //math.random her tıklamada yeni id gelmesi için
        ]);
    };

    useEffect(() => {
        console.log('useEffect todos', todos);
    }, [todos])

    useEffect(() => {
        console.log('useEffect count', count);
    }, [count])

    useEffect(() => {
		console.log('this hook runs at initial render');//useEffect hook'u ilk çalıştığında render ediliyor sonra çalışmıyor.
	}, []);

    return (
        <div>
            <ul>
                {todos.map((t) => {
                    return <li key={t.id}>{t.text}</li>;
                })}
            </ul>
            <AddNewTodo AddTodo={AddTodo} />
            <button onClick={() => setCount(count + 1)}>Score:{count}</button>
        </div>
    );
};

export default TodoList;

//NOT => /*props burada AddTodo*/ UNUTMA.