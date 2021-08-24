<template>
	<div>
		<loader v-if="TeacherisLoading" object="#fff" color1="#ffffff" color2="#17fd3d" size="5" speed="4" bg="#343a40" objectbg="#999793" opacity="80" name="spinning"></loader>
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Gender</th>
					<th scope="col">Branch</th>
					<th scope="col">Email</th>
					<th scope="col">Phone</th>
					<th scope="col" class="text-center">Opr.</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(teacher,index) in allTeachers" :key="teacher.id">
					<th scope="row">{{index}}</th>
					<td>{{teacher.firstName}} {{teacher.lastName}}</td>
					<td v-if="teacher.gender == 0">Male</td>
					<td v-else>Female</td>
					<td>
						<span class="badge badge-danger text-black" v-for="branch in teacher.branch" :key="branch.id">{{branch.name.name}}</span>
					</td>
					<td>{{teacher.email}}</td>
					<td>{{teacher.phone}}</td>
					<td class="d-flex justify-content-end justify-content-center">
						<button class="btn btn-danger btn-sm bt me-2" @click="deleteTeacher(teacher.id)"><i class="fas fa-trash"></i></button>
						<router-link :to="{name:'EditTeacher',params:{id:teacher.id}}" class="btn btn-info btn-sm bt text-white"><i class="fas fa-pen"></i></router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed:{
			...mapGetters(['allTeachers','TeacherisLoading'])
		},
		methods:{
			...mapActions(['getTeachers','deleteTeacher'])
		},
		created(){
			this.getTeachers()
		},
	}
</script>

<style>
</style>
