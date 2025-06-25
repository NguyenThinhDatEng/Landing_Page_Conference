<template>
  <SectionTitle title="Register" subtitle="Let's join with us">
    <form
      class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col gap-4"
      @submit.prevent="handleSubmit"
    >
      <div>
        <label class="block text-sm font-medium mb-1" for="fullName"
          >Full Name</label
        >
        <input
          id="fullName"
          v-model="form.fullName"
          type="text"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter full name"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1" for="phone"
          >Phone Number</label
        >
        <input
          id="phone"
          v-model="form.phone"
          type="text"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter phone number"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1" for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter email"
          required
        />
      </div>
      <TButton type="submit" class="w-full mt-2">Register</TButton>
    </form>
  </SectionTitle>
</template>

<script setup>
import { reactive } from "vue";
import TButton from "./TButton.vue";
import SectionTitle from "./SectionTitle.vue";

const form = reactive({
  fullName: "",
  phone: "",
  email: "",
});

function handleSubmit() {}
</script>
