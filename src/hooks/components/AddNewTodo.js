import { useState } from "react";

const AddNewTodo = ({ AddTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        AddTodo(newTodo);
        setNewTodo(""); //İnput'un içinin temizlenmesi
    };
    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="todo"></label>
            <input
                type="text"
                id="todo"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
            />
            <input type="submit" />
        </form>
    );
};

export default AddNewTodo;
