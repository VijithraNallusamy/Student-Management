<template>
  <div class="home flex bg-gray-100 min-h-screen">
    <!-- Sidebar with toggle -->
    <SideBar :isExpanded="isSidebarExpanded" @toggle-menu="toggleSidebar" />

    <!-- Main content adjusts based on sidebar state -->
    <div
      :class="[
        'w-full p-4 transition-all duration-300',
        { 'ml-[10px]': isSidebarExpanded },
      ]"
    >
      <p>This is Home Page</p>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {
      isSidebarExpanded: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
    },
  },
  components: {
    SideBar,
  },
};
</script>

<style scoped>
/* Additional styles, if necessary */
</style>
