<template>
  <div class="flex gap-6 items-start bg-white rounded-lg shadow p-6">
    <!-- Avatar bên trái -->
    <div class="flex-shrink-0 mr-2">
      <img
        :src="avatar"
        alt="Avatar"
        class="avatar rounded-full object-cover border"
      />
    </div>
    <!-- Nội dung bên phải -->
    <div class="flex-1">
      <div class="flex items-center gap-2 text-gray-500 text-sm">
        <font-awesome-icon icon="fa-solid fa-clock" class="text-blue-500" />
        <span class="post-meta">{{ time }}</span>
      </div>
      <div class="post-title mb-2 text-red">{{ title }}</div>
      <hr class="my-2 border-gray-200" />
      <div class="text-gray-700 mb-4 mt-12">{{ content }}</div>
      <div class="flex">
        <strong class="mr-1">{{ name }}</strong>
        <span v-if="position"> / {{ position }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatar: String,
  time: String,
  title: String,
  content: String,
  name: String,
  position: String,
});
</script>

<style lang="scss">
.avatar {
  width: 100px;
  height: 100px;
  border: 4px solid #e2e8f0; /* Màu xám nhạt */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-meta {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #293239;
  margin-bottom: 10px;
  line-height: 1;
}

.post-title {
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 12px;
}
</style>
