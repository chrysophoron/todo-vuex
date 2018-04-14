<template>
	<ul>
		<TodoItem v-for="todo of todos" :todo="todo" :key="todo.id"></TodoItem>	
	</ul>
</template>

<script>
	import TodoItem from "./TodoItem.vue"

	export default {
		name:"todoList",
		props:{
			todos:Array
		},
		components:{
			TodoItem,
		}
	}
</script>