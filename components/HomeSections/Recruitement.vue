<template>
  <section class="py-12 bg-space-500">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div xyz="fade delay-4">
          <h2
            xyz="fade up delay-3 duration-6"
            class="mb-8 text-2xl font-bold text-center text-white sm:text-3xl lg:text-5xl xyz-nested"
            v-html="content.title"
          ></h2>
          <p
            xyz="fade up delay-6 duration-6"
            class="mb-10 text-center text-white md:text-lg lg:text-xl xyz-nested"
            v-html="content.content"
          ></p>
          <div class="flex justify-center text-white">
            <div class="inline-block">
              <List :texts="content.keypoints" :checkSVG="content.checkSVG" />
            </div>
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
