<template>
  <section class="py-12 bg-space-400">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div
          class="relative px-4 py-8 border-l-8 border-red-600 bg-space-500 rounded-xl lg:px-8 text-space-100 shadow-lg"
          role="alert"
          xyz="fade"
        >
          <span
            class="absolute px-2 bg-red-600 rounded-md shadow -top-3 right-10 text-red-50"
            v-html="content.title"
          ></span>
          <p
            class="font-medium text-justify lg:text-lg"
            v-html="content.text"
          ></p>
        </div>
      </XyzTransition>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  }
};
</script>

<style></style>
