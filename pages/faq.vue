<template>
  <Container class="py-12">
    <h1
      class="mb-4 text-3xl font-bold text-center sm:text-4xl lg:text-6xl md:mb-8 text-space-500"
    >
      {{ content.title }}
    </h1>
    <div class="mx-auto prose text-justify sm:max-w-3xl md:prose-lg md:max-w-4xl lg:prose-xl lg:max-w-6xl">
      <div v-for="(c, index) in content.categories" :key="index">
        <h2>{{ c.name }}</h2>
        <div v-for="(q, i) in questions" :key="i">
          <div v-if="q.category_id === c.id">
            <h3>{{ q.title }}</h3>
            <nuxt-content :document="q" />
          </div>
        </div>
      </div>
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
  async asyncData({ $content, params }) {
    const questions = await $content()
      .sortBy("slug")
      .fetch();
    console.log(questions);
    questions.forEach(el => {
      console.log(el.slug);
    });
    return { questions };
  }
};
</script>

<style></style>
