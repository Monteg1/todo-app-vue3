<template>
  <div class="todo-item">
    <label :class="{ completed: todo.completed }">
      <input 
        type="checkbox" 
        :checked="todo.completed" 
        @change="toggleCompletion" 
      />
      <span class="todo-text">{{ todo.text }}</span>
      <span v-if="todo.completed" class="checkmark">✔️</span>
    </label>
    <button @click="removeTodo">Удалить</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useTodoStore, Todo } from '../stores/todoStore';

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },
  setup(props) {
    const todoStore = useTodoStore();

    const toggleCompletion = () => {
      todoStore.toggleTodo(props.todo.id);
    };

    const removeTodo = () => {
      todoStore.deleteTodo(props.todo.id);
    };

    return {
      toggleCompletion,
      removeTodo
    };
  }
});
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  word-wrap: break-word;
}

label {
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
}

.todo-text {
  display: inline-block;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: center;
  max-width: 100%;
}

.completed {
  text-decoration: line-through;
  color: green;
}

.checkmark {
  margin-left: 8px;
  color: green;
  font-size: 1.2em;
}

button {
  background-color: #ff4d4d;
  border: none;
  color: white;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #ff1a1a;
}
</style>
