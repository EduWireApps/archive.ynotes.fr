<template>
  <div class="contents">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$slots.default[0].elm.classList.add(
      "transition-transform",
      "ease-linear"
    );
    this.$slots.default[0].elm.style.transitionDuration = "5000ms";
    setInterval(this.float, 3000);
  },
  methods: {
    float() {
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let x = getRandomInt(-20, 20),
        y = getRandomInt(-20, 20),
        z = getRandomInt(-20, 20);

      this.$slots.default[0].elm.style.transform = `translate3d(${x}px,${y}px,${z}px)`;
    }
  }
};
</script>

<style></style>
