import axios from 'axios'
import { notify } from "@kyvg/vue3-notification";
import router from '../../router'

export default ({
	state: {
		students:[],
		studentForm:[],
		errorMessages:[],
		isLoading:false,
	},

	getters:{
		Students: (state) => state.students,
		Student: (state) => state.studentForm,
		StudentError: (state) => state.errorMessages,
		StudentisLoading: (state) => state.isLoading,
	},

	actions: {
		getStudents(commit){
			commit.state.isLoading = true
			axios.get('students')
			.then(res=>{
				commit.state.students = res.data
			})
			.catch(()=>{
				commit.state.students = []
			})
			.finally(()=>{
				commit.state.isLoading = false
			})
		},

		addStudent(commit,form){
			commit.state.isLoading = true
			const formData = new FormData();
			formData.append('image', form.image)
			formData.append('firstName', form.firstName)
			formData.append('lastName', form.lastName)
			formData.append('email', form.email)
			formData.append('phone', form.phone)
			formData.append('address', form.address)
			formData.append('birth', form.birth)
			formData.append('gender', form.gender)
			formData.append('status', form.status)
			axios.post('student/create', formData)
			.then(()=>{
				notify({
					type:'success',
					title: "Student created successfully.",
				});
				router.push({name:'Students'})
			})
			.catch(err=>{
				notify({
					type:'error',
					title: "Student didn't created.",
				});
				commit.state.errorMessages = err.response.data.errors
			})	
			.finally(()=>{
				commit.state.isLoading = false
			})
		},

		getStudent(commit, id){
			commit.state.isLoading = true
			axios.get('student/'+id)
			.then(res=>{
				if (res.data.id) {
					commit.state.studentForm = res.data
				}else{
					notify({
						type:'error',
						title: "Student not found.",
					});
					router.push({
						name:'Students'
					})
				}
			})
			.catch(()=>{
				commit.state.studentForm = []
			})
			.finally(()=>{
				commit.state.isLoading = false
			})
		},

		editStudent(commit, form){
			commit.state.isLoading = true
			const formData = new FormData();
			formData.append('image', form.image)
			formData.append('firstName', form.firstName)
			formData.append('lastName', form.lastName)
			formData.append('email', form.email)
			formData.append('phone', form.phone)
			formData.append('address', form.address)
			formData.append('birth', form.birth)
			formData.append('gender', form.gender)
			formData.append('status', form.status)
			axios.post('student/'+form.id+'/update', formData)
			.then(()=>{
				notify({
					type:'success',
					title: "Student updated successfully.",
				});
				router.push({name:'Students'})
			})
			.catch(err=>{
				notify({
					type:'error',
					title: "Student didn't updated.",
				});
				commit.state.errorMessages = err.response.data.errors
			})	
			.finally(()=>{
				commit.state.isLoading = false
			})
		},

		deleteStudent({dispatch},id){
			axios.delete('student/'+id+'/delete')
			.then(()=>{
				dispatch('getStudents')
				notify({
					type:'success',
					title: "Student successfully deleted.",
				});
			})
			.catch(()=>{
				notify({
					type:'error',
					title: "Student didn't deleted.",
				});
			})
		}

	},

	mutations:{

	},

})