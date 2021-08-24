<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2">		
				<div class="card">
					<div class="card-header d-flex justify-content-between align-items-center">
						<h4>Teachers</h4>
						<router-link :to="{name:'AddTeacher'}" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Add Teacher</router-link>
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
	import list from '@/components/teachers/list.vue'
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
