<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2">
				<div class="card">
					<div class="card-header d-flex justify-content-between align-items-center">
						<h4>Add Teacher</h4>
						<router-link :to="{name:'Teachers'}" class="btn btn-primary btn-sm"><i class="fas fa-arrow-left"></i> Go Back</router-link>
					</div>
					<div class="card-body">
						<addform></addform>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import addform from './addform.vue'
	export default {
		components:{
			addform
		},
		data() {
			return {

			};
		},
	};
</script>

<style lang="css" scoped>
</style>
