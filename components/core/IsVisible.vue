<template>
  <div
    v-observe-visibility="{
      callback: checkVisibility,
      throttle: throttle,
      thereshold: thereshold,
      rootMargin: rootMargin
    }"
  >
    <slot :show="show" />
  </div>
</template>

<script>
export default {
  props: {
    once: {
      type: Boolean,
      default: false
    },
    throttle: { type: Number, default: 0 },
    thereshold: { type: Number, default: 0 },
    rootMargin: { type: String, default: "0" }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    checkVisibility(isVisible, entry) {
      if (this.once) {
        if (!isVisible || this.show) return;
        this.show = true;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style></style>
