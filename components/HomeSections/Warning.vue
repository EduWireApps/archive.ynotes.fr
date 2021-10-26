<template>
  <section class="pt-20 pb-16 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div
          class="px-2 py-4 bg-gray-100 rounded-lg lg:px-4 text-gray-600"
          role="alert"
          xyz="fade scale delay-2 duration-8"
        >
          <p
            class="font-medium text-justify text-base"
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
