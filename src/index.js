import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) );
// Otra forma de ponerlo (sólo vale si se pasa SOLO un argumento)
todoList.todos.forEach( crearTodoHtml );

//Para ver que realmente se ha parseado el json a un objeto
//console.log('todos', todoList.todos);