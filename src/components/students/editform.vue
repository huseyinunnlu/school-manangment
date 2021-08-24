<template>
	<div>
		<form @submit.prevent="editStudent(Student)">
			<div class="row">
				<div class="form-group col-md-12">
					<img v-if="Student.image && !imagePreview" :src="Student.image" style="width: 100px; height: 100px;">
					<img v-else :src="imagePreview" style="width: 100px; height: 100px;"><br>
					<label for="image" class="mt-3">Image</label> 
					<button type="button" class="btn btn-primary btn-sm" @click="Student.image = null" :disabled="!Student.image || imagePreview">Delete Current Image</button> 
					<button type="button" class="btn btn-primary btn-sm" @click="imagePreview = null" :disabled="!imagePreview">Delete Preview Image</button>
					<input type="file" placeholder="Upload Image" id="image" class="form-control" @change="onFileSelected">
					<span v-if="StudentError.image" class="text-danger" v-text="StudentError.image[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="first-name">First Name</label>
					<input type="text" placeholder="First Name" id="first-name" class="form-control"  v-model="Student.firstName">
					<span v-if="StudentError.firstName" class="text-danger" v-text="StudentError.firstName[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="last-name">Last Name</label>
					<input type="text" placeholder="Last Name" id="last-name" class="form-control" v-model="Student.lastName">
					<span v-if="StudentError.lastName" class="text-danger" v-text="StudentError.lastName[0]"></span>
				</div>
				<div class="form-group col-md-8">
					<label for="email">Email</label>
					<input type="text" placeholder="Email" id="email" class="form-control" v-model="Student.email">
					<span v-if="StudentError.email" class="text-danger" v-text="StudentError.email[0]"></span>
				</div>
				<div class="form-group col-md-4">
					<label for="email">Phone</label>
					<input type="text" placeholder="+90000000000" id="email" class="form-control" v-model="Student.phone">
					<span v-if="StudentError.phone" class="text-danger" v-text="StudentError.phone[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="address">Address</label>
					<input type="text" placeholder="Example st. Denizli" id="address" class="form-control" v-model="Student.address">
					<span v-if="StudentError.address" class="text-danger" v-text="StudentError.address[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="birth">Birth Date</label>
					<input type="date" id="birth" class="form-control" v-model="Student.birth">
					<span v-if="StudentError.birth" class="text-danger" v-text="StudentError.birth[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="gender">Gender</label>
					<select class="form-select" v-model="Student.gender" id="gender">
						<option :value="null">Select Gender</option>
						<option value="0">Male</option>
						<option value="1">Female</option>
					</select>
					<span v-if="StudentError.gender" class="text-danger" v-text="StudentError.gender[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="status">Status</label>
					<select class="form-select" v-model="Student.status" id="status">
						<option :value="null">Select Status</option>
						<option value="0">Active</option>
						<option value="1">Inactive</option>
						<span v-if="StudentError.status" class="text-danger" v-text="StudentError.status[0]"></span>
					</select>
				</div>
				<!--<div class="form-group col-md-6">
					<label>Branch</label>
					<Multiselect placeholder="Select Branch" v-model="form.branch" :options="allBranches" mode="tags" label="name" trackBy="name"/>
					<span v-if="TeacherError.branch" class="text-danger" v-text="TeacherError.branch[0]"></span>
				</div>-->
			</div>
			<button class="btn btn-success btn-sm mt-3">Update Student</button>
		</form>
	</div>
</template>

<script>
	//import axios from 'axios'
	//import Multiselect from '@vueform/multiselect'
	import { mapActions,mapGetters } from 'vuex'
	export default {
		components:{
			//Multiselect
		},
		data() {
			return {
				imagePreview:null,
			}
		},
		computed:{
			...mapGetters(['StudentError','Student']),
		},
		methods:{
			...mapActions(['getStudent','editStudent']),
			onFileSelected(e){
				this.Student.image = e.target.files[0]
				this.imagePreview = URL.createObjectURL(this.Student.image)
			},
		},
		created(){
			this.getStudent(this.$route.params.id)
		}
	};
</script>

<style lang="css" scoped>
.form-group {
	margin: 5px 0;
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
