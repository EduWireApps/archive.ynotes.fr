<template>
  <Container class="py-12">
    <h1
      class="mb-4 text-3xl font-bold text-center sm:text-4xl lg:text-6xl md:mb-8 text-space-500"
    >
      {{ content.title }}
    </h1>
    <div
      class="mx-auto prose text-justify sm:max-w-3xl md:prose-lg md:max-w-4xl lg:prose-xl lg:max-w-6xl"
    >
      <nuxt-content :document="content" />
    </div>
  </Container>
</template>

<script>
export default {
  head() {
    return {
      title: "FAQ",
      meta: [
        {
          name: "description",
          content:
            "Des questions concernant yNotes ? Nous avons les réponses !",
          hid: "description"
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const files = await $content().fetch(),
      content = files[0];
    return { content };
  }
};
</script>

<style></style>
