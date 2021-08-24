<template>
	<div>
		<loader v-if="isLoading" object="#fff" color1="#ffffff" color2="#17fd3d" size="5" speed="4" bg="#343a40" objectbg="#999793" opacity="80" name="spinning"></loader>
		<form @submit.prevent="editBranch(this.branchForm)">
			<div class="row">
				<div class="form-group col-md-6">
					<label for="name">Branch Name</label>
					<input type="text" placeholder="Branch Name" id="name" class="form-control" v-model="branchForm.name">
					<span v-if="errorMessages.name" class="text-danger" v-text="errorMessages.name[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="status">Status</label>
					<select class="form-select" id="status" v-model="branchForm.status">
						<option :value="'0'">Active</option>
						<option :value="'1'">Inactive</option>
					</select>
					<span v-if="errorMessages.status" class="text-danger">{{errorMessages.status[0]}}</span>
				</div>
			</div>
			<button type="submit" class="btn btn-success btn-sm mt-3">Edit Branch</button>
		</form>
	</div>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
	export default {
		data() {
			return {
			};
		},
		computed:{
			...mapGetters(['errorMessages','successMessage','isLoading','branchForm']),
		},
		created(){
			this.getBranch(this.$route.params.id)
		},
		methods:{
			...mapActions(['createBranch','getBranch','editBranch']),
		},
		
	};
</script>

<style lang="css" scoped>
.form-group {
	margin: 5px 0;
}
</style>
