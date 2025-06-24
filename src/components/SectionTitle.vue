<template>
  <section class="page-section" :style="{ backgroundColor, color: textColor }">
    <div class="container">
      <h1 class="section-title">
        <span>
          {{ title }}
          <small v-if="subtitle">/ {{ subtitle }}</small>
        </span>
      </h1>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  backgroundColor: {
    type: String,
    default: "#fbfbfb",
  },
  textColor: {
    type: String,
    default: "",
  },
});
</script>
