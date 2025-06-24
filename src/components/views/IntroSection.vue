<template>
  <SectionTitle
    title="What's about event"
    subtitle="whats going on there come and learn"
  >
    <div class="flex">
      <div class="flex-[8]">
        Praesent ac sem in neque venenatis tristique. Morbi et ligula velit.
        Nullam a augue vel mi porta vestibulum non ac elit. Vivamus convallis
        tortor et fermentum semper. In hac habitasse platea dictumst. Curabitur
        eget dui id metus pulvinar suscipit. Quisque vitae ligula laoreet,
        scelerisque leo quis, facilisis metus. Sed pellentesque, urna sed varius
        consectetur, eros augue fringilla magna, id sem magna vel diam. Nulla
        sed hendrerit nunc.
        <TButton class="mt-20" @click="scrollToRegister">
          Đăng ký ngay
          <template #icon>
            <IconSupport />
          </template>
        </TButton>
      </div>
      <div class="flex-[4]">
        <div class="grid grid-cols-2 grid-rows-2 gap-2">
          <div class="media">
            <img
              src="@/assets/imgs/intro/Co_do_Hue.webp"
              alt="Cờ đỏ Huế"
              class="w-full h-32 object-cover rounded"
            />
          </div>
          <div class="media">
            <img
              src="@/assets/imgs/intro/Khach_du_lich.webp"
              alt="Khách du lịch"
              class="w-full h-32 object-cover rounded"
            />
          </div>
          <div class="media">
            <img
              src="@/assets/imgs/intro/Phong_canh_thien_nhien.webp"
              alt="Phong cảnh thiên nhiên"
              class="w-full h-32 object-cover rounded"
            />
          </div>
          <div class="media">
            <img
              src="@/assets/imgs/intro/vuong_trieu_Nguyen.webp"
              alt="Vương triều Nguyễn"
              class="w-full h-32 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </SectionTitle>
</template>
