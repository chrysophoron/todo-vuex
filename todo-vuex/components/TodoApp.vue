<template>
	<div>
		<div>
			<ToggleSelectAll />
			<TodoInput />
		</div>

		<TodoList :todos="todos"></TodoList>

		<div>
			<ItemsLeft></ItemsLeft>
			<TodoCateToggle></TodoCateToggle>
			<ClearComplete foo="bar" bar="baz" v-if="show"></ClearComplete>

		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import ToggleSelectAll from "./ToggleSelectAll.vue"
	import TodoInput from "./TodoInput.vue"
	import TodoList from "./TodoList.vue"
	import ItemsLeft from "./ItemsLeft.vue"
	import TodoCateToggle from "./TodoCateToggle.vue"
	import ClearComplete from "./ClearComplete.vue"
	import TodoItem from "./TodoItem.vue"

	export default {
		computed: {
			...Vuex.mapGetters({
				todos: "showingTodos",
				show: "hasDone"
			})
		},
		components:{
			ToggleSelectAll,
			TodoInput,
			TodoList,
			ItemsLeft,
			TodoCateToggle,
			ClearComplete
		}
	}

</script>