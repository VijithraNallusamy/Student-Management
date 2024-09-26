<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar (Left Navigation) -->
    <aside
      :class="[
        ' text-white fixed top-0 left-0 h-full z-20 transition-transform mt-16',
        isSidebarExpanded ? 'w-64' : 'w-16',
      ]"
    >
      <SideBar :isExpanded="isSidebarExpanded" @toggle-menu="toggleSidebar" />
    </aside>

    <!-- Main Content Area -->
    <div
      :class="[
        'flex-1 flex flex-col transition-all',
        isSidebarExpanded ? 'ml-64' : 'ml-16',
      ]"
    >
      <!-- Header (Top Navigation) -->
      <header class="shadow-md fixed top-0 left-0 right-0 z-10">
        <HeaderView @toggle-menu="toggleSidebar" />
      </header>

      <main class="flex-1 mt-16 p-6">
        <div class="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">
            Add Student
          </h1>

          <form class="text-start">
            <!-- Responsive Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Left Column -->
              <div class="space-y-5">
                <!-- Name Input -->
                <div class="form-group">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Age Input -->
                <div class="form-group">
                  <label
                    for="age"
                    class="block text-sm font-medium text-gray-700"
                    >Age</label
                  >
                  <input
                    type="number"
                    id="age"
                    placeholder="Enter age"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Blood Group -->
                <div class="form-group">
                  <label
                    for="blood"
                    class="block text-sm font-medium text-gray-700"
                    >Blood Group</label
                  >
                  <select
                    name="blood"
                    id="blood"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="">A+</option>
                    <option value="">A-</option>
                    <option value="">B+</option>
                    <option value="">B-</option>
                    <option value="">O+</option>
                    <option value="">O-</option>
                    <option value="">AB+</option>
                    <option value="">AB-</option>
                  </select>
                </div>

                <!-- Gender -->
                <div class="form-group">
                  <label
                    for="gender"
                    class="block text-sm font-medium text-gray-700"
                    >Gender</label
                  >
                  <select
                    name="gender"
                    id="gender"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <!-- Standard -->
                <div class="form-group">
                  <label
                    for="standard"
                    class="block text-sm font-medium text-gray-700"
                    >Standard</label
                  >
                  <input
                    type="text"
                    id="standard"
                    placeholder="Enter Standard"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Previous School -->
                <div class="form-group">
                  <label
                    for="pschoolname"
                    class="block text-sm font-medium text-gray-700"
                    >Previous School</label
                  >
                  <input
                    type="text"
                    id="pschoolname"
                    placeholder="Enter Previous School Name"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Nationality -->
                <div class="form-group">
                  <label
                    for="nationality"
                    class="block text-sm font-medium text-gray-700"
                    >Nationality</label
                  >
                  <select
                    name="nationality"
                    id="nationality"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="indian">Indian</option>
                    <option value="non-indian">Non-Indian</option>
                  </select>
                </div>

                <!-- Photo Upload -->
                <div class="form-group">
                  <label
                    for="photo"
                    class="block text-sm font-medium text-gray-700"
                    >Upload Photo</label
                  >
                  <input
                    type="file"
                    id="photo"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-5">
                <!-- Father's Name -->
                <div class="form-group">
                  <label
                    for="fname"
                    class="block text-sm font-medium text-gray-700"
                    >Father's Name</label
                  >
                  <input
                    type="text"
                    id="fname"
                    placeholder="Enter Father's Name"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Father's Occupation -->
                <div class="form-group">
                  <label
                    for="foccupation"
                    class="block text-sm font-medium text-gray-700"
                    >Father's Occupation</label
                  >
                  <input
                    type="text"
                    id="foccupation"
                    placeholder="Enter Father's Occupation"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Mother's Name -->
                <div class="form-group">
                  <label
                    for="mname"
                    class="block text-sm font-medium text-gray-700"
                    >Mother's Name</label
                  >
                  <input
                    type="text"
                    id="mname"
                    placeholder="Enter Mother's Name"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Mother's Occupation -->
                <div class="form-group">
                  <label
                    for="moccupation"
                    class="block text-sm font-medium text-gray-700"
                    >Mother's Occupation</label
                  >
                  <input
                    type="text"
                    id="moccupation"
                    placeholder="Enter Mother's Occupation"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Contact Number -->
                <div class="form-group">
                  <label
                    for="contactnumber"
                    class="block text-sm font-medium text-gray-700"
                    >Contact Number</label
                  >
                  <input
                    type="text"
                    id="contactnumber"
                    placeholder="Enter Contact Number"
                    maxlength="12"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Alternate Contact Number -->
                <div class="form-group">
                  <label
                    for="altcontact"
                    class="block text-sm font-medium text-gray-700"
                    >Alternate Contact</label
                  >
                  <input
                    type="text"
                    id="altcontact"
                    placeholder="Enter Alternate Contact Number"
                    maxlength="12"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Email -->
                <div class="form-group">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  />
                </div>

                <!-- Address -->
                <div class="form-group">
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700"
                    >Address</label
                  >
                  <textarea
                    id="address"
                    rows="3"
                    placeholder="Enter Address"
                    class="block w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm"
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="mt-6 flex justify-end">
              <button
                type="submit"
                class="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
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
    HeaderView,
    SideBar,
  },
};
</script>

<style scoped>
/* Custom styles for smoother transition and layout */
</style>
