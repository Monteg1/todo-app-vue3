import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref<Todo[]>(JSON.parse(localStorage.getItem('todos') || '[]'));

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    todos.value.push(newTodo);
  };

  const toggleTodo = (id: number) => {
    const todo = todos.value.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter(t => t.id !== id);
  };

  watch(todos, (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }, { deep: true });

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
});
