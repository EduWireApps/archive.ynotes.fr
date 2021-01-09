<template>
  <Container class="py-12 text-center">
    <h1
      class="mb-4 text-3xl font-bold sm:text-4xl lg:text-6xl md:mb-8 text-space-500"
    >
      {{ content.title }}
    </h1>
  </Container>
</template>

<script>
import content from "@/assets/content/faq.json";
export default {
  data() {
    return {
      content: content
    };
  },
  mounted() {
    this.$store.commit("header/settopStyle", { t: false });
    this.$store.commit("header/setMarginTop", { m: true });
  }
};
</script>

<style></style>
