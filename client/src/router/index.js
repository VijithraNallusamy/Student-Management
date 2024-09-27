import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddStudent from "@/views/Student/AddStudent.vue";
import StudentList from "@/views/Student/StudentList.vue";
import AddStaff from "@/views/Staff/AddStaff.vue";
import StaffList from "@/views/Staff/StaffList.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
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
  {
    path: "/stafflist",
    name: "stafflist",
    component: StaffList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
