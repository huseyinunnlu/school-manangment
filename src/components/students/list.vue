<template>
	<loader v-if="StudentisLoading" object="#fff" color1="#ffffff" color2="#17fd3d" size="5" speed="4" bg="#343a40" objectbg="#999793" opacity="80" name="spinning"></loader>
	<div>
		<table class="table table-striped table-hover table table-responsive">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Image</th>
					<th scope="col">Name</th>
					<th scope="col">Gender</th>
					<th scope="col">Birth</th>
					<th scope="col">Contact</th>
					<th scope="col">Class</th>
					<th scope="col">Status</th>
					<th scope="col" class="text-center">Opr.</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(student,index) in Students" :key="student.id">
					<th scope="row">{{index}}</th>
					<th scope="row">
						<img :src="student.image" class="image">
					</th>
					<td>{{student.firstName}} {{student.lastName}}</td>
					<td v-if="student.gender == 0">Male</td>
					<td v-else>Female</td>
					<td>{{student.birth}}</td>
					<td>{{student.phone}} - {{student.email}}</td>
					<td>12/A</td>
					<td v-if="student.status == 0" class="text-success">Active</td>
					<td v-if="student.status == 1" class="text-danger">Inactive</td>
					<td class="d-flex justify-content-end justify-content-center">
						<button class="btn btn-danger btn-sm bt me-2" @click="deleteStudent(student.id)"><i class="fas fa-trash"></i></button>
						<router-link :to="{name:'EditStudent',params:{id:student.id}}" class="btn btn-info btn-sm bt text-white"><i class="fas fa-pen"></i></router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import {mapActions,mapGetters} from 'vuex';

	export default {
		data(){
			return {

			}
		},
		computed:{
			...mapGetters(['StudentisLoading','Students']),
		},
		methods:{
			...mapActions(['getStudents','deleteStudent']),
		},
		created(){
			this.getStudents()
		},
	}
</script>
<style type="text/css">
	.image{
		border-radius: 50%;
		width: 30px;
		height: 30px;
	}
</style>