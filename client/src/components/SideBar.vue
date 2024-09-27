<template>
  <aside
    :class="['side-bar', { 'side-bar-expanded': isExpanded }]"
    class="bg-black text-white overflow-hidden min-h-[100vh] p-[1rem]"
  >
    <div class="menu-toggle-wrap flex justify-end">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-symbols-outlined">
          {{
            isExpanded
              ? "keyboard_double_arrow_left"
              : "keyboard_double_arrow_right"
          }}
        </span>
      </button>
    </div>
    <div class="menu">
      <div class="flex flex-col gap-y-8">
        <router-link
          to=""
          class="text-white hover:bg-white hover:text-black rounded transition duration-300 flex px-2 py-2 items-center gap-x-2"
        >
          <span class="material-symbols-outlined"> home </span
          ><span v-if="isExpanded">Home</span>
        </router-link>
        <div class="relative">
          <!-- Add button with dropdown toggle -->
          <div
            @click="toggleDropdown"
            class="text-white hover:bg-white hover:text-black rounded transition duration-300 flex px-2 py-2 items-center gap-x-2 cursor-pointer"
          >
            <span class="material-symbols-outlined">person_add</span>
            <span v-if="isExpanded">Add +</span>
          </div>

          <!-- Dropdown Menu -->
          <div
            v-if="isDropdownOpen && isExpanded"
            class="absolute bg-white border rounded mt-2 shadow-lg w-full"
          >
            <ul>
              <router-link to="/addstudent">
                <li
                  class="px-4 py-2 text-start text-black hover:text-gray-600 bg-gray-200 cursor-pointer"
                  @click="selectOption('Add Student')"
                >
                  Add Student
                </li>
              </router-link>
              <router-link to="/addstaff">
                <li
                  class="px-4 py-2 text-start text-black hover:text-gray-600 bg-gray-200 cursor-pointer"
                  @click="selectOption('Option 2')"
                >
                  Add Staff
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  props: {
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      console.log("Selected:", option);
      this.isDropdownOpen = false; // Close dropdown after selecting
    },
  },
};
</script>

<style>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  transition: width 0.2s ease-out;
}

.side-bar-expanded {
  width: 250px;
}

@media (max-width: 768px) {
  aside {
    position: fixed;
    z-index: 99;
    height: 100vh;
  }
}
</style>
