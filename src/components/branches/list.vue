<template>
	<loader v-if="isLoading" object="#fff" color1="#ffffff" color2="#17fd3d" size="5" speed="4" bg="#343a40" objectbg="#999793" opacity="80" name="spinning"></loader>
	<div>
		<table class="table table-striped table-bordered table-responsive table-hover">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Status</th>
					<th scope="col" class="text-center">Opr.</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(branch,index) in branches" :key="branch.id">
					<th scope="row">{{index}}</th>
					<td>{{branch.name}}</td>
					<td v-if="branch.status == 0" class="text-success fw-bold">Active</td>
					<td v-else class="text-danger fw-bold">Inactive</td>
					<td class="d-flex justify-content-end justify-content-center">
						<button class="btn btn-danger btn-sm me-2" @click="deleteBranch(branch.id)"><i class="fas fa-times"></i></button>
						<router-link :to="{name:'EditBranch',params:{id:branch.id}}" class="btn btn-info btn-sm text-white"><i class="fas fa-pen"></i> Edit</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapActions,mapGetters } from 'vuex'
	export default {
		data() {
			return {

			}
		},
		methods:{
			...mapActions(['getBranches','deleteBranch']),
		},
		computed: {
			...mapGetters(['branches','isLoading'])
		},
		created(){
			this.getBranches()
		},
	}
</script>

<style>
</style>
