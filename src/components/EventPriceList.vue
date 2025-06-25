<template>
  <SectionTitle
    title="Event Price list"
    subtitle="perfect price for event"
    backgroundColor="#fff"
  >
    <div class="w-full">
      <div class="flex flex-col md:flex-row gap-6 justify-center">
        <div
          v-for="tier in tiers"
          :key="tier.type"
          class="price-table flex-1 bg-white rounded-xl shadow-lg flex flex-col items-center p-6"
        >
          <div class="price-label text-lg font-semibold">
            {{ tier.type }}
          </div>
          <div class="price-value text-red text-2xl font-bold">
            {{ tier.price }}
          </div>
          <hr class="my-2 border-gray-200 w-full" />
          <div class="price-description w-full text-center text-gray-600">
            {{ tier.description }}
          </div>
          <TButton class="price-table-row-bottom w-full mt-auto"
            >Register</TButton
          >
        </div>
      </div>
    </div>
  </SectionTitle>
</template>

<script setup>
const tiers = [
  {
    type: "Basic",
    price: "500$",
    description:
      "Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi tristiquetus et senectus et netus et malesuada ac turpis.",
  },
  {
    type: "Advanced",
    price: "1000$",
    description:
      "Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi tristiquetus et senectus et netus et malesuada ac turpis.",
  },
  {
    type: "Ultimate",
    price: "2000$",
    description:
      "Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi tristiquetus et senectus et netus et malesuada ac turpis.",
  },
];
</script>

<style lang="scss">
.price-table {
  text-align: center;
  border: solid 1px #0d1d31;
  border-radius: 10px;
  padding: 8px;

  .price-label {
    font-size: 24px;
    padding: 25px 15px;
    background-color: #f5f5f5;
    color: #475056;
    border-radius: 10px;
    width: 100%;
  }

  .price-value {
    font-size: 48px;
    font-weight: 700;
    padding: 20px 15px;
    width: 100%;
  }

  .price-description {
    padding: 20px 15px;
  }

  .price-table-row-bottom {
    border-top: solid 1px #c5c7c9;
    padding: 0 15px;
    height: 50px;
  }
}
</style>
