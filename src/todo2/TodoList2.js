import React, { useState } from 'react';
import './TodoList2.css';

const TodoList2 = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleSaveTodo = () => {
        if (todoText.trim() === '') return;

        setTodos([...todos, { text: todoText, id: Date.now() }]);
        setTodoText('');
    };

    const handleRemoveTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleModifyTodo = (id) => {
        const modifiedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isModifying: true };
            }
            return todo;
        });
        setTodos(modifiedTodos);
    };

    const handleSaveModifiedTodo = (id, newText) => {
        const modifiedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: newText, isModifying: false };
            }
            return todo;
        });
        setTodos(modifiedTodos);
    };

    return (
        <section className="main-section">
            <article className="area3">
                <p className="title">My Todos</p>
                <div>
                  <input
                      type="text"
                      value={todoText}
                      onChange={handleInputChange}
                      placeholder="Enter your todo..."
                  />
                  <button className="save" onClick={handleSaveTodo}>Save</button>
                </div>
            </article>
            <article className="area4">
                {todos.map(todo => (
                    <div key={todo.id}>
                        {todo.isModifying ? (
                            <>
                                <input
                                    type="text"
                                    defaultValue={todo.text}
                                    onBlur={(e) => handleSaveModifiedTodo(todo.id, e.target.value)}
                                />
                                <button className="save" onClick={() => handleSaveModifiedTodo(todo.id, todo.text)}>Save</button>
                            </>
                        ) : (
                            <>
                                <input type="checkbox" />
                                <span className="todoText">{todo.text}</span>
                                <button className="remove" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                                <button className="modify" onClick={() => handleModifyTodo(todo.id)}>Modify</button>
                            </>
                        )}
                    </div>
                ))}
            </article>
        </section>
    );
};

export default TodoList2;
