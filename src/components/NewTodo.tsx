import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

// interface NewTodoProps {
//   onAddTodo: (text: string) => void; // TS forma za funkcije kroz props ukoliko ne vraca nista !
// }

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null); // MORA NULL
  //dodajemo genericki tip ovde na useRef, u pitanju je integrisan tip za input element, za svaki element postoji drugaciji

  const todoContext = useContext(TodosContext); //povlacimo useContext i koristimo ga, moramo da povezemo provider u App-u !

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    //ovako uzimamo value iz inputa, ! znaci da smo sigurni da value nece biti null i mora da vrati non-null value !!
    //to znaci da npr input element nece da se parsuje kasnije nego sto mi kliknemo submit na formu
    //ukoliko stavimo npr ? kazemo TS-u da ukoliko je vrednost null, sacuvaj null, ako nije sacuvaj sve drugo
    if (enteredText.trim().length === 0) {
      //trow Error
      return;
    }
    todoContext.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
