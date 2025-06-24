<template>
  <SectionTitle
    title="Donation"
    subtitle="lorem ipsum"
    backgroundColor="#dc143c"
    text-color="#ffffff"
  >
    <div class="flex flex-col">
      Etiam molestie, quam eget dignissim dapibus, diam libero auctor justo, a
      eleifend urna tellus et ligula. Curabitur elementum diam nec lacus
      pretium.
      <TButton class="mt-20 bg-white text-red" @click="scrollToRegister">
        Make a donation now
        <!-- <template #icon>
          <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />
        </template> -->
      </TButton>
    </div>
  </SectionTitle>
</template>
