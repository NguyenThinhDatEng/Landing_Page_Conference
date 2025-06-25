<template>
  <SectionTitle
    title="Event Speakers"
    subtitle="Meet with Greaters"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <SpeakerCardVertical
        v-for="(speaker, idx) in speakers"
        :key="idx"
        :avatar="speaker.avatar"
        :name="speaker.name"
        :position="speaker.position"
        :quote="speaker.quote"
      />
    </div>
  </SectionTitle>
</template>

<script setup>
import DANMY from '@/assets/imgs/speakers/DANMY.jpg'
import HanSara from '@/assets/imgs/speakers/HanSara.jpg'
import MAIQUINN from '@/assets/imgs/speakers/MAIQUINN.jpg'

const speakers = [
  {
    avatar: DANMY,
    name: 'Đan My',
    position: 'CEO, TechCorp',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit',
  },
  {
    avatar: HanSara,
    name: 'Han Sara',
    position: 'CTO, InnovateX',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit',
  },
  {
    avatar: MAIQUINN,
    name: 'Mai Quinn',
    position: 'Founder, GreenStart',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit',
  },
]

import SpeakerCardVertical from '../SpeakerCardVertical.vue'
</script>
