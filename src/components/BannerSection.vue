<template>
  <div
    class="banner-section relative w-full h-[600px] md:h-[800px] bg-cover bg-center flex flex-col justify-center items-center text-white relative"
    :style="bannerStyle"
  >
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="container gap-1 flex flex-col relative">
      <h2 class="caption-title w-full justify-center">
        <span class="w-full text-center time">January 17-19, 2014</span>
      </h2>
      <h1
        class="caption-title w-full justify-center align-center text-4xl md:text-6xl font-bold mt-4"
      >
        <span class="w-full text-center">Technology Conference in Hue 2025</span>
      </h1>
      <div class="flex justify-center mt-8">
        <TButton @click="scrollToRegister">
          Register Now
          <template #icon>
            <IconSupport />
          </template>
        </TButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner-section {
  .caption-title {
    font-family: "Roboto Slab", serif;
    font-size: 60px;
    line-height: 60px;
    font-weight: 300;
    color: #ffffff;
    text-shadow: 1px 1px #000000;
    clear: both;
    display: flex;
    text-transform: uppercase;
    margin: 0 0 0 0;
    position: relative;
    overflow: hidden;

    span.time {
      display: inline-block;
      position: relative;

      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 25px;
        left: 0;
        height: 5px;
        width: 20%;
        border-top: solid 1px #ffffff;
        border-bottom: solid 1px #ffffff;
      }

      &::after {
        left: auto;
        right: 0;
      }
    }
  }
}
</style>

<script setup>
import TButton from "./TButton.vue";
import IconSupport from "./icons/IconSupport.vue";

const bannerUrl =
  "https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1701611330.jpg&w=3840&q=75";

const bannerUrl1 =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"; // Ảnh Huế, có thể thay bằng ảnh khác
const bannerStyle = `background-image: url('${bannerUrl}');`;

function scrollToRegister() {
  const el = document.getElementById("register-form");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>
