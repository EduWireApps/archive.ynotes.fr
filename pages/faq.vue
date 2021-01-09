<template>
  <Container class="py-12">
    <h1
      class="mb-4 text-3xl font-bold sm:text-4xl lg:text-6xl md:mb-8 text-space-500 text-center"
    >
      {{ content.title }}
    </h1>
    <div class="prose max-w-6xl text-justify mx-auto">
      <nuxt-content v-for="(q, i) in questions" :key="i" :document="q" />
    </div>
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
  },
  async asyncData({ $content, params }) {
    const questions = await $content().fetch();
    console.log(questions);
    return { questions };
  }
};
</script>

<style></style>
