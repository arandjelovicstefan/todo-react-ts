import { nanoid } from 'nanoid';

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = nanoid();
  }
}
export default Todo;
