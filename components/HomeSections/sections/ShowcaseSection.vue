<template>
  <section class="py-16 bg-white">
    <XyzTransition appear-visible duration="auto">
      <div class="flex flex-col h-full md:flex-row-reverse">
        <Container class="flex flex-col justify-center flex-1">
          <div class="text-center">
            <h3
              class="text-base font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500 inline-block xyz-nested"
              xyz="fade down-1 delay-6 duration-15"
              v-html="content.subtitle"
            ></h3>
            <h2
              class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl xyz-nested"
              xyz="fade down-1 delay-3 duration-15"
              v-html="content.title"
            ></h2>
            <p
              class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto xyz-nested"
              xyz="fade down-1 delay-6 duration-15"
              v-html="content.text"
            ></p>
          </div>
        </Container>
        <component :is="componentName" />
      </div>
    </XyzTransition>
  </section>
</template>

<script>
import ShowHomework from "@/components/HomeSections/showcases/ShowHomework";
export default {
  components: {
    ShowHomework
  },
  props: {
    content: Object,
    componentName: String
  }
};
</script>

<style></style>
