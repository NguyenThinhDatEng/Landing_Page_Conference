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
import CoDoHue from '@/assets/imgs/intro/Co_do_Hue.webp'
import KhachDuLich from '@/assets/imgs/intro/Khach_du_lich.webp'
import PhongCanhThienNhien from '@/assets/imgs/intro/Phong_canh_thien_nhien.webp'

const speakers = [
  {
    avatar: CoDoHue,
    name: 'Nguyễn Văn A',
    position: 'CEO, TechCorp',
    quote: 'Công nghệ là chìa khóa mở ra tương lai.',
  },
  {
    avatar: KhachDuLich,
    name: 'Trần Thị B',
    position: 'CTO, InnovateX',
    quote: 'Sáng tạo là động lực phát triển.',
  },
  {
    avatar: PhongCanhThienNhien,
    name: 'Lê Văn C',
    position: 'Founder, GreenStart',
    quote: 'Khởi nghiệp xanh vì một Việt Nam bền vững.',
  },
]

import SpeakerCardVertical from '../SpeakerCardVertical.vue'
</script>
