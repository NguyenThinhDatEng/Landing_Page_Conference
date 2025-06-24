<script setup>
const sponsors = [
  {
    name: "Sponsor 1",
    logo: new URL('@/assets/imgs/sponsor/sponsor.png', import.meta.url).href,
  },
  {
    name: "Sponsor 2",
    logo: new URL('@/assets/imgs/sponsor/sponsor.png', import.meta.url).href,
  },
  {
    name: "Sponsor 3",
    logo: new URL('@/assets/imgs/sponsor/sponsor.png', import.meta.url).href,
  },
];
</script>

<template>
  <SectionTitle
    title="Event Sponsors"
    subtitle="dont forget it"
    backgroundColor="#fff"
    text-color="#dc143c"
  >
    <div class="flex gap-16 flex-wrap justify-center">
      <div
        v-for="sponsor in sponsors"
        :key="sponsor.name"
        class="flex flex-col items-center"
      >
        <img
          :src="sponsor.logo"
          :alt="sponsor.name"
          class="w-32 h-32 object-contain"
        />
        <div class="text-center mt-2 text-black">{{ sponsor.name }}</div>
      </div>
    </div>
  </SectionTitle>
</template>
