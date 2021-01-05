<template>
  <div>
    <Hero v-observe-visibility="updateHeaderTransparency" />
    <Warning />
    <Features />
    <div class="h-screen bg-space-500"></div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     show: {
  //       warning: false
  //     }
  //   };
  // },
  mounted() {
    this.$store.commit("header/setTransparent", { t: true });
    this.$store.commit("header/setMarginTop", { t: false });
  },
  methods: {
    updateHeaderTransparency(isVisible, entry) {
      this.$store.commit("header/setTransparent", { t: isVisible });
    }
  }
};
</script>

<style></style>
