<template>
  <div class="todo-list">
    <div class="add-todo">
      <textarea 
        v-model="newTodo" 
        @keyup.enter="addNewTodo" 
        placeholder="Добавьте задачу" 
        rows="3"
      />
      <button @click="addNewTodo">Добавить</button>
    </div>

    <div v-if="todoStore.todos.length === 0" class="no-todos">
      Нет задач
    </div>
    <ul>
      <li v-for="todo in todoStore.todos" :key="todo.id">
        <TodoItem :todo="todo" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  setup() {
    const todoStore = useTodoStore();
    const newTodo = ref('');

    const addNewTodo = () => {
      if (newTodo.value.trim()) {
        todoStore.addTodo(newTodo.value);
        newTodo.value = '';
      }
    };

    return {
      todoStore,
      newTodo,
      addNewTodo
    };
  }
};
</script>

<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
}

.add-todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.add-todo textarea {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  resize: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.add-todo button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-todo button:hover {
  background-color: #45a049;
}

.no-todos {
  padding-top: 20px;
  text-align: center;
  color: #888;
}
</style>
