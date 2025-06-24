<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import BannerSection from "./components/BannerSection.vue";
import RegisterForm from "./components/RegisterForm.vue";
import EventPriceList from "./components/EventPriceList.vue";
import IntroSection from "@/components/views/IntroSection.vue";
import EventSpeakersSection from "./components/views/EventSpeakersSection.vue";
import DonationSection from "./components/views/DonationSection.vue";
import ScheduleSection from "./components/views/ScheduleSection.vue";
import SponsorsSection from "./components/views/SponsorsSection.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <!-- <HeaderSection /> -->
  <div class="content-area flex-col items-center">
    <BannerSection />
    <IntroSection />
    <DonationSection />
    <ScheduleSection />
    <SponsorsSection />
    <EventSpeakersSection />
    <EventPriceList />
    <RegisterForm />
  </div>
  <FooterSection />
</template>

<style scoped>
/* Có thể thêm style tuỳ chỉnh cho landing page ở đây nếu cần */
</style>
