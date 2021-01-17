<template>
  <section class="py-12 bg-space-400">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div xyz="fade delay-4">
          <h2
            xyz="fade up delay-3 duration-6"
            class="mb-8 text-2xl font-bold text-center text-white sm:text-3xl lg:text-5xl xyz-nested"
          >
            {{ content.title }}
          </h2>
          <div
            class="max-w-3xl pt-8 lg:pt-16 mx-auto text-white"
            xyz="fade up stagger ease-in-out delay-8"
          >
            <Step
              v-for="(s, index) in content.steps"
              :key="index"
              :svg="s.svg"
              :title="s.title"
              :content="s.content"
              :last="index == Object.keys(content.steps).length - 1"
            />
          </div>
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
