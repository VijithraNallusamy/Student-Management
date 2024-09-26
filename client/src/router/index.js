import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddStudent from "@/views/Student/AddStudent.vue";
import StudentList from "@/views/Student/StudentList.vue";
import AddStaff from "@/views/Staff/AddStaff.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/addstudent",
    name: "addstudent",
    component: AddStudent,
  },
  {
    path: "/studentlist",
    name: "studentlist",
    component: StudentList,
  },
  {
    path: "/addstaff",
    name: "addstaff",
    component: AddStaff,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
