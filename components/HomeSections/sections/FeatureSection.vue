<template>
  <section class="py-10 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div
          class="flex flex-col h-full py-16"
          :class="`md:flex-row${left ? '-reverse' : ''}`"
        >
          <div class="flex flex-col justify-center flex-1 mb-6 mx-6">
            <div class="text-left">
              <h2
                class="text-3xl font-extrabold leading-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 sm:text-5xl text-center md:text-left xyz-nested"
                xyz="fade down-1 delay-3 duration-15"
                v-html="content.title"
              ></h2>
              <p
                class="max-w-2xl mt-8 text-lg lg:text-xl text-gray-700 xyz-nested text-justify leading-8"
                xyz="fade down-1 delay-6 duration-15"
                v-html="content.text"
              ></p>
            </div>
          </div>
          <div class="inline-flex items-center justify-center flex-1">
            <XyzConflict
              xyz="fade down-1 delay-6 duration-15"
              class="transform transition-transform duration-500"
              endClass="md:hover:-translate-y-4"
            >
              <img
                :src="require(`~/assets/${content.imgPath}`)"
                class="w-3/4 mx-auto md:w-96"
                alt="Illustration"
              />
            </XyzConflict>
          </div>
        </div>
      </XyzTransition>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    content: Object,
    left: Boolean
  }
};
</script>

<style></style>
