
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		showingCategory:"all",
		idCount:3,
		todos:[
			{
				id:1,
				done:false,
				content:"eat"
			},
			{
				id:2,
				done:false,
				content:"drink"
			}
		]
	},
	getters:{
		isAllDone:state => state.todos.every(it=>it.done),
		itemsLeft:state => state.todos.filter(it=>!it.done).length,
		hasDone: (state,getters) => state.todos.length - getters.itemsLeft > 0,
		showingTodos:state =>{
			if(state.showingCategory === "all") {
				return state.todos
			}
			if(state.showingCategory === "active") {
				return state.todos.filter(it=>!it.done)
			}
			if(state.showingCategory === "completed") {
				return state.todos.filter(it=>it.done)
			}
		}
		
	},
	mutations:{
		addTodo(state,content) {
			state.todos.push({
				id:state.idCount++,
				done:false,
				content
			})
		},
		deleteTodo(state,todo) {
			state.todos = state.todos.filter(it=>it !== todo)
		},
		setAllDone(state) {
			state.todos.forEach(it => it.done = true)
		},
		setAllUnDone(state) {
			state.todos.forEach(it => it.done = false)
		},
		toggleTodoStatus(state,todo) {
			todo.done = !todo.done
		},
		changeTodoContent(state,{todo,content}) {
			todo.content = content
		},
		switchShowingCateGory(state,cate) {
			state.showingCategory = cate
		},
		clearCompleted(state) {
			state.todos = state.todos.filter(it => !it.done)
		}
	}
})