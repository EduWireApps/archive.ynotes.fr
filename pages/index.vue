<template>
  <div>
    <Hero
      v-observe-visibility="updateHeaderTransparency"
      :content="content.hero"
    />
    <Warning :content="content.warning" />
    <Features :content="content.features" />
  </div>
</template>

<script>
import content from "@/assets/content/index.json";

export default {
  data() {
    return {
      content: content
    };
  },
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
