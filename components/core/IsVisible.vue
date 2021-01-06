<template>
  <div
  class="min-h-24"
    v-observe-visibility="{
      callback: checkVisibility,
      throttle: 0,
      thereshold: 0
    }"
  >
    <slot :show="show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    checkVisibility(isVisible, entry) {
      if (!isVisible || this.show) return;
      this.show = true;
    }
  }
};
</script>

<style></style>
