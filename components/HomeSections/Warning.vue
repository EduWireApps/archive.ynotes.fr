<template>
  <section class="py-32 bg-gray-100">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div
          class="relative px-4 py-8 border-l-8 border-red-600 bg-gray-200 rounded-xl lg:px-8 text-gray-800 shadow"
          role="alert"
          xyz="fade scale delay-2 duration-8"
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
