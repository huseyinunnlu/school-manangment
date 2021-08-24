<template>
	<div>
		<loader v-if="TeacherisLoading" object="#fff" color1="#ffffff" color2="#17fd3d" size="5" speed="4" bg="#343a40" objectbg="#999793" opacity="80" name="spinning"></loader>
		<form @submit.prevent="editTeacher(_TeacherForm)">
			<div class="row">
				<div class="form-group col-md-6">
					<label for="first-name">First Name</label>
					<input type="text" placeholder="First Name" id="first-name" class="form-control"  v-model="_TeacherForm.firstName">
					<span v-if="TeacherError.firstName" class="text-danger" v-text="TeacherError.firstName[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="last-name">Last Name</label>
					<input type="text" placeholder="Last Name" id="last-name" class="form-control" v-model="_TeacherForm.lastName">
					<span v-if="TeacherError.lastName" class="text-danger" v-text="TeacherError.lastName[0]"></span>
				</div>
				<div class="form-group col-md-8">
					<label for="email">Email</label>
					<input type="text" placeholder="example@mail.com" id="email" class="form-control" v-model="_TeacherForm.email">
					<span v-if="TeacherError.email" class="text-danger" v-text="TeacherError.email[0]"></span>
				</div>
				<div class="form-group col-md-4">
					<label for="email">Phone</label>
					<input type="text" placeholder="+90000000000" id="email" class="form-control" v-model="_TeacherForm.phone">
					<span v-if="TeacherError.phone" class="text-danger" v-text="TeacherError.phone[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="address">Address</label>
					<input type="text" placeholder="Example st. Denizli" id="address" class="form-control" v-model="_TeacherForm.address">
					<span v-if="TeacherError.address" class="text-danger" v-text="TeacherError.address[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="birth">Birth Date</label>
					<input type="date" id="birth" class="form-control" v-model="_TeacherForm.birth">
					<span v-if="TeacherError.birth" class="text-danger" v-text="TeacherError.birth[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label for="gender">Gender</label>
					<select class="form-select" v-model="_TeacherForm.gender" id="gender">
						<option :value="null">Select Gender</option>
						<option value="0">Male</option>
						<option value="1">Female</option>
					</select>
					<span v-if="TeacherError.gender" class="text-danger" v-text="TeacherError.gender[0]"></span>
				</div>
				<div class="form-group col-md-6">
					<label>Branch</label>
					<Multiselect placeholder="Select Branch" v-model="_TeacherForm.activeBranches" :options="allBranches" mode="tags" label="name" trackBy="name"/>
					<span v-if="TeacherError.activeBranches" class="text-danger" v-text="TeacherError.activeBranches[0]"></span>
				</div>
			</div>
			<button class="btn btn-success btn-sm mt-3">Add Teacher</button>
		</form>
	</div>
</template>

<script>
	import Multiselect from '@vueform/multiselect'
	import { mapActions,mapGetters } from 'vuex'
	export default {
		components:{
			Multiselect
		},
		data() {
			return {
				form:{
					firstName:null,
					lastName:null,
					email:null,
					phone:null,
					address:null,
					gender:null,
					branch:[]
				}
			}
		},
		methods:{
			...mapActions(['getActiveBranches','getTeacher','editTeacher'])
		},
		computed:{
			...mapGetters(['allBranches','TeacherError','TeacherisLoading','_TeacherForm'])
		},
		created(){
			this.getActiveBranches()
			this.getTeacher(this.$route.params.id)
		}
	};
</script>

<style lang="css" scoped>
.form-group {
	margin: 5px 0;
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
