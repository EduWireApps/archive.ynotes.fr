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
            class="mb-12 text-center text-white md:text-lg lg:text-xl xyz-nested"
            v-html="content.content"
          ></p>
          <div
            class="flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"
          >
            <a
              v-for="(l, i) in content.links"
              :key="i"
              :href="l.url"
              xyz="fade up delay-8 duration-6"
              class="inline-block px-6 py-4 text-xl font-semibold text-center uppercase transition-colors duration-150 ease-in-out bg-white rounded-full xyz-nested focus:outline-none text-space-500 hover:bg-gray-200"
              v-html="l.text"
            >
            </a>
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
