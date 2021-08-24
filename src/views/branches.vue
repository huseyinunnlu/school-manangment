<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2">		
				<div class="card">
					<div class="card-header d-flex justify-content-between align-items-center">
						<h4>Branches</h4>
						<router-link :to="{name:'AddBranch'}" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Add Branch</router-link>
					</div>
					<div class="card-body">
						<list></list>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import list from '@/components/branches/list.vue'
	export default {
		components:{
			list
		},
		data() {
			return {

			}
		},
	};
</script>

<style lang="css" scoped>
</style>
