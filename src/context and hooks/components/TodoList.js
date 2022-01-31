import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

// class TodoList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context
//     const theme = isDarkTheme ? darkTheme : lightTheme
//     return (
//       <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center', marginTop: '10px' }}>
//         <p className="item">Aile gezisini planlayın</p>
//         <p className="item">Akşam yemeği için alışverişe git</p>
//         <p className="item">Yürüyüşe çıkmak</p>
//         <div>
//           <button className='ui button primary' onClick={changeTheme}>Tema Değiştir</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default TodoList;

//NOT => static contextType sadece class component'a kullanabilirsin...


//Yukardaki yapılan örneği useContext() Hook'u ile yapımı: AŞAĞIDAKİNİ KULLAN UNUTMA...
const TodoList1 = () => {
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { todos, dispatch  } = useContext(TodoListContext)

  const [tds, setTds] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setTds(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: tds });
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: 'REMOVE_TODO', id });
  }
  return (
    <div style={{ background: theme.background, color: theme.text, textAlign: 'center', marginTop: '10px' }}>
      {
        todos.length ? (
          todos.map(todo => {
            return <p key={todo.id} id={todo.id} onClick={handleRemoveTodo} className='item'>{todo.text}</p>
          })
        ) : (
          <div>Todos yok...</div>
        )
      }
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo">Todo Ekle:</label>
        <input type="text" id="todo" onChange={handleOnChange} />
        <input className='ui button primary' type="submit" value='Todo Ekle' style={{ marginRight: '4px' }} />
        <button className='ui button primary' onClick={changeTheme}>Tema Değiştir</button>
      </form>
    </div>
  );
}

export default TodoList1;
