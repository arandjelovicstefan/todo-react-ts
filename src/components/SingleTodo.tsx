import React from 'react';
import classes from './SingleTodo.module.css';

interface SingleTodoProps {
  text: string;
  onRemoveTodo: () => void;
}

const SingleTodo: React.FC<SingleTodoProps> = ({ text, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};

export default SingleTodo;
