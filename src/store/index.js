import { createStore } from 'vuex'
import branch from './modules/branch'
import teacher from './modules/teacher'
import student from './modules/student'
const store = createStore({
	modules:{
		branch,
		teacher,
		student,
	}
});

export default store;
