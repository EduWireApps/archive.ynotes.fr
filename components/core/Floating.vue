<template>
  <div class="contents">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$slots.default[0].elm.style.transitionDuration = "5000ms";
    this.$slots.default[0].elm.style.transitionProperty = "transform";
    this.$slots.default[0].elm.style.transitionTimingFunction =
      "cubic-bezier(0.4, 0, 0.2, 1)";
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
      let b = this.getBreakpoint(),
        n;
      if (b == "default" || b == "sm" || b == "md") {
        n = 10;
      } else {
        n = 20;
      }
      let x = getRandomInt(-n, n),
        y = getRandomInt(-n, n),
        z = getRandomInt(-n, n);

      this.$slots.default[0].elm.style.transform = `translate3d(${x}px,${y}px,${z}px)`;
    },
    getBreakpoint() {
      let w = window.innerWidth,
        b;
      if (w < 640) {
        b = "default";
      } else if (w < 768) {
        b = "sm";
      } else if (w < 1024) {
        b = "md";
      } else if (w < 1280) {
        b = "lg";
      } else if (w < 1536) {
        b = "xl";
      } else {
        b = "2xl";
      }
      return b;
    }
  }
};
</script>

<style></style>
