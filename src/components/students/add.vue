<template>
	<loader v-if="StudentisLoading" object="#fff" color1="#ffffff" color2="#17fd3d" size="5" speed="4" bg="#343a40" objectbg="#999793" opacity="80" name="spinning"></loader>
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2">
				<div class="card">
					<div class="card-header d-flex justify-content-between align-items-center">
						<h4>Add Student</h4>
						<router-link :to="{name:'Students'}" class="btn btn-primary btn-sm"><i class="fas fa-arrow-left"></i> Go Back</router-link>
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
	import { mapGetters } from 'vuex'
	import addform from './addform.vue'
	export default {
		components:{
			addform
		},
		data() {
			return {

			};
		},
		computed:{
			...mapGetters(['StudentisLoading'])
		}
	};
</script>

<style lang="css" scoped>
</style>
