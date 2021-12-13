import React, { useState } from 'react';
import Todo from '../models/todo';

interface TodosInterface {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosInterface>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
  //ovde je struktura context-a, niz todo-a, funkcije za dodavanje i brisanje
});

const TodosContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    return setTodos((prev: Todo[]) => [...prev, new Todo(text)]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== todoId));
  };

  const contextValue: TodosInterface = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>;
};

export default TodosContextProvider;
