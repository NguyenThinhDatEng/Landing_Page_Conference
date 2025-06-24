<script setup>
import SectionTitle from "../SectionTitle.vue";
import SpeakerCard from "../SpeakerCard.vue";
</script>

<template>
  <SectionTitle
    title="What's about event"
    subtitle="whats going on there come and learn"
  >
    <div class="flex flex-col">
      <SpeakerCard
        avatar="src/assets/imgs/intro/Co_do_Hue.webp"
        time="08:00 - 08:45"
        title="Opening Keynote"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor."
        name="John Doe"
        position="CEO at Crown.io"
      />
      <SpeakerCard
        avatar="src/assets/imgs/intro/Khach_du_lich.webp"
        time="09:00 - 09:45"
        title="Tech Trends 2025"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor."
        name="Jane Smith"
        position="CTO at TechFlow"
      />
      <SpeakerCard
        avatar="src/assets/imgs/intro/Phong_canh_thien_nhien.webp"
        time="10:00 - 10:45"
        title="Innovation in AI"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor."
        name="Alice Nguyen"
        position="AI Lead at FutureLab"
      />
    </div>
  </SectionTitle>
</template>