<template>
	<div>
		<label>
			<input type="radio" :checked="currentCate === 'all' " @click="switchCate('all')"/>All
		</label>
		<label>
			<input type="radio" :checked="currentCate === 'active' " @click="switchCate('active')"/>Active
		</label>
		<label>
			<input type="radio" :checked="currentCate === 'completed' " @click="switchCate('completed')"/>Completed
		</label>
	</div>
</template>

<script>
	export default {
		
		computed:{
			currentCate:function(){
				return this.$store.state.showingCategory
			}
		},
		methods:{
			switchCate(cate) {
				this.$store.commit("switchShowingCateGory",cate)
			}
		}
	}

</script>