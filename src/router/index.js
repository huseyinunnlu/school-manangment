import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Teachers from '../views/teachers.vue'
import AddTeacher from '../components/teachers/add.vue'
import EditTeacher from '../components/teachers/edit.vue'
import Branches from '../views/branches.vue'
import AddBranch from '../components/branches/add.vue'
import EditBranch from '../components/branches/edit.vue'
import Students from '../views/student.vue'
import AddStudent from '../components/students/add.vue'
import EditStudent from '../components/students/edit.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  //Teachers
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/teacher/create',
    name: 'AddTeacher',
    component: AddTeacher
  },
  {
    path: '/teacher/:id/edit',
    name: 'EditTeacher',
    component: EditTeacher,
  },
  //Branches
  {
    path: '/branches',
    name: 'Branches',
    component: Branches
  },
  {
    path: '/branch/create',
    name: 'AddBranch',
    component: AddBranch
  },
  {
    path: '/branch/:id/edit',
    name: 'EditBranch',
    component: EditBranch,
  },
  //Students
  {
    path: '/students',
    name: 'Students',
    component: Students,
  },
  {
    path: '/student/create',
    name: 'AddStudent',
    component: AddStudent,
  },
  {
    path: '/student/:id/edit',
    name: 'EditStudent',
    component: EditStudent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
