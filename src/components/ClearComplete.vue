<template>
	<button v-if="show" @click="clear">Clear Completed</button>
</template>

<script>
	import Vuex from "vuex"
	export default {
		methods:Vuex.mapMutations({
			clear:"clearCompleted"
		}),
		computed:Vuex.mapGetters({
			show:"hasDone"
		})

	}
</script>