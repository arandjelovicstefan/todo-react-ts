import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import SingleTodo from './SingleTodo';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todoContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoContext.items.map(item => {
        return <SingleTodo key={item.id} text={item.text} onRemoveTodo={todoContext.removeTodo.bind(null, item.id)} />;
        // ovde koristimo BIND, prvi argument je sta je THIS, nama on ovde ne treba pa je NULL, drugi argument je zapravo sta ce funkcija da prima
      })}
    </ul>
  );
};

export default Todos;
