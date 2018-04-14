<template>
	<span>{{left}} item<span v-show="left > 1">s</span> left  </span>
</template>

<script>
	export default {
		computed:{
			left:function(){
				return this.$store.getters.itemsLeft
			}
		}
	}
</script>