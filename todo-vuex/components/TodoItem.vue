<template>
	<li ref="root">
		<input type="checkbox" :checked="todo.done" @click="toggle(todo)" />
		<span v-show="!editing" @dblclick="editing = true" >{{todo.content}}</span>
		<input v-focus v-if="editing" ref="input" type="text" :value="todo.content" @blur="edit" @keyup.enter="edit"/>
		<span @click="delTodo(todo)">x</span>
	</li>
</template>

<script>
export default {
	name:"todoItem",
	props:["todo"],
	data(){
			return {
				editing:false
			}
		},
		methods:{
			edit(){
				this.editing = false
				this.$store.commit("changeTodoContent",{
					todo:this.todo,
					content:this.$ref.input.value
				})
			},
			toggle(todo){
				this.$store.commit("toggleTodoStatus",todo)
			},
			delTodo(todo) {
				this.$store.commit("deleteTodo",todo)
			}
		},
		directives:{
			focus:{
				inserted:function(el) {
					el.focus()
				}
			}
		}
}

</script>