<template>
	<input  type="text" v-model.trim="todoText" @keyup.enter="addTodo"/>
</template>

<script>
export default {
		data(){
			return {
				todoText:''
			}
		},
		methods:{
			addTodo(){
				if(this.todoText) {
					this.$store.commit("addTodo",this.todoText)
					this.todoText = ""
				}
			}
		}
}

</script>