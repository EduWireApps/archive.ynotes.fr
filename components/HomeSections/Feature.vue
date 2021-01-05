<template>
  <XyzTransition appear duration="auto">
    <div class="flex">
      <div class="w-full text-space-700 flex items-center">
        <div class="text-white">
          <h2
            class="text-5xl font-bold mb-8 xyz-nested"
            xyz="fade up delay-3 duration-6"
          >
            Toutes les fonctionnalités de base...
          </h2>
          <List :texts="texts" />
        </div>
      </div>
      <img
        :src="require(imgPath)"
        class="w-96 mx-20 xyz-nested"
        xyz="fade right delay-4"
      />
    </div>
  </XyzTransition>
</template>

<script>
export default {
  props: {
    texts: Array,
    imgPath: String
  }
};
</script>

<style></style>
