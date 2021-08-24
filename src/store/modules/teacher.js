import axios from 'axios'
import { notify } from "@kyvg/vue3-notification";
import router from '../../router'

export default ({
	state: {
		teachers:[],
		teacherForm:[],
		selectBranches:[],
		errorMessages:[],
		isLoading:false,
	},

	getters:{
		allBranches: (state) => state.selectBranches,
		allTeachers:(state) => state.teachers,
		_TeacherForm:(state) => state.teacherForm,
		TeacherError: (state) => state.errorMessages,
		TeacherisLoading: (state) => state.isLoading,
	},

	actions: {
		getTeachers(commit){
			commit.state.isLoading = true
			axios.get('teachers')
			.then(res=>{
				commit.state.teachers = res.data
			})
			.catch(()=>{
				commit.state.isLoading = false
			})
			.finally(()=>{
				commit.state.isLoading = false
			})
		},
		getActiveBranches(commit){
			axios.get('branches')
			.then(res=>{
				commit.state.selectBranches = res.data
			})
		},
		createTeacher(commit, form){
			commit.state.isLoading = true
			axios.post('teacher/create', form)
			.then(res=>{
				console.log(res)
				commit.state.isLoading = false
				notify({
					type:'success',
					title: "Teacher created successfully.",
				});
				router.push({name:'Teachers'})
			})
			.catch(err=>{
				commit.state.errorMessages = err.response.data.errors
				commit.state.isLoading = false
				notify({
					type:'error',
					title: "Teacher didn't created.",
				});
			})
			.finally(()=>{
				commit.state.isLoading = false
			})
		},

		getTeacher(commit, id){
			commit.state.isLoading = true
			axios.get('teacher/'+id)
			.then(res=>{
				if (res.data.id) {
					commit.state.teacherForm = res.data
				}else{
					notify({
						type:'error',
						title: "Teacher not found.",
					});
					router.push({
						name:'Teachers'
					})
				}
			})
			.catch(()=>{
				commit.sate.teacherForm = []
			})
			.finally(()=>{
				commit.state.isLoading = false
			})
		},

		editTeacher(commit,form){
			commit.state.isLoading = true
			axios.post('teacher/'+form.id+'/update',form)
			.then(()=>{
				router.push({name:'Teachers'})
				notify({
					type:'success',
					title: "Teacher successfully updated.",
				});
			})
			.catch(err=>{
				notify({
					type:'error',
					title: "Teacher didn't updated.",
				});
				commit.state.errorMessages = err.response.data.errors
			})
			.finally(()=>{
				commit.state.isLoading = false
			})
		},

		deleteTeacher({dispatch},id){
			axios.delete('teacher/'+id+'/delete')
			.then(()=>{
				dispatch('getTeachers')
				notify({
					type:'success',
					title: "Teacher successfully deleted.",
				});
			})
		}
	},

	mutations:{

	},


})