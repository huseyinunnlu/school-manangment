<template>
	<!--<loader v-if="TeacherisLoading" object="#fff" color1="#ffffff" color2="#17fd3d" size="5" speed="4" bg="#343a40" objectbg="#999793" opacity="80" name="spinning"></loader>-->
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2">		
				<div class="card">
					<div class="card-header d-flex justify-content-between align-items-center">
						<h4>Students</h4>
						<router-link :to="{name:'AddStudent'}" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Add Student</router-link>
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
	import list from '@/components/students/list.vue'
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
