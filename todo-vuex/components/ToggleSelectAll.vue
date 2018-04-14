<template>
		<input type="checkbox" :value="isAllDone" @click="toggle" />
</template>

<script>
import Vuex from "vuex"
export default {
	computed:{
		...Vuex.mapGetters({
			isAllDone:"isAllDone"
		})
	} ,
	methods:{
		toggle(){
			if(this.$store.getters.isAllDone) {
				this.$store.commit("setAllUnDone")
			} else {
				this.$store.commit("setAllDone")
			}
		},
	}
}
</script>