import axios from 'axios'
import { notify } from "@kyvg/vue3-notification";
import router from '../../router'

export default({
	state: {
		branches:[],
		branchForm:[],
		errorMessages:[],
		successMessage:null,
		isLoading:false
	},

	getters:{
		branches: (state) => state.branches,
		branchForm: (state) => state.branchForm,
		errorMessages: (state) => state.errorMessages,
		successMessage: (state) => state.successMessage,
		isLoading: (state) => state.isLoading,
	},

	actions: {
		getBranches(commit){
			commit.state.isLoading = true
			axios.get('branch/')
			.then(res=>{
				commit.state.branches = res.data
				commit.state.isLoading = false
			})
			.catch(()=>{
				commit.state.isLoading = false
			})
			.finally(()=>{
				commit.state.isLoading = false
			})
		},
		createBranch(commit,form){
			commit.state.isLoading = true
			axios.post('branch/create', form)
			.then(()=>{
				commit.state.successMessage = 'Branch created successfully.'
				commit.state.errorMessages = []
				commit.state.isLoading = false
				notify({
					type:'success',
					title: "Branch created successfully.",
				});
			})
			.catch(err=>{
				commit.state.successMessage = null
				commit.state.errorMessages = err.response.data.errors
				commit.state.isLoading = false
				notify({
					type:'error',
					title: "Branch didnt created.",
				});
			})
		},
		getBranch(commit, id){
			commit.state.isLoading = true
			axios.get('branch/'+id)
			.then(res=>{
				if(!res.data.id){
					router.push('/branches')
				}
				commit.state.branchForm = res.data
			})
			.finally(()=>{
				commit.state.isLoading = false
			})
		},

		editBranch(commit,form){
			commit.state.isLoading = true
			axios.post('branch/'+form.id+'/edit',form)
			.then(()=>{
				commit.state.isLoading = false
				router.push({name:'Branches'})
				notify({
					type:'success',
					title: "Branch successfully updated.",
				});
			})
			.catch(err=>{
				notify({
					type:'error',
					title: "Branch didn't updated.",
				});
				commit.state.errorMessages = err.response.data.errors
				commit.state.isLoading = false
			})
		},

		deleteBranch({dispatch},id){
			axios.delete('branch/'+id+'/delete')
			.then(()=>{
				dispatch('getBranches')
				notify({
					type:'success',
					title: "Branch successfully deleted.",
				});
			})
		}
	},

	mutations:{
	},
})