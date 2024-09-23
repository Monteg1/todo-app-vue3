<template>
  <div id="app">
    <h1>To-Do List</h1>
    <TodoList />
  </div>
</template>

<script lang="ts">
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
}

h1 {
  color: #333;
}
</style>
