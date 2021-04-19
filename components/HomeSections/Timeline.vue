<template>
  <section class="py-10 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div class="mb-10 text-center">
          <h2
            class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl xyz-nested"
            xyz="fade down-1 delay-3 duration-15"
            v-html="content.title"
          ></h2>
        </div>
        /
      </XyzTransition>
      <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div
          v-for="(e, i) in content.events"
          :key="i"
          class="flex md:contents"
          :class="{ 'flex-row-reverse': i % 2 === 0 }"
        >
          <div
            v-if="i % 2 !== 0"
            class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
          >
            <div class="flex items-center justify-center w-6 h-full">
              <div
                class="w-1 h-full"
                :class="[
                  i === 0 ? 'rounded-t-full bg-gradient-to-b' : '',
                  i === content.events.length - 1
                    ? 'rounded-b-full bg-gradient-to-t'
                    : '',
                  i === 0 || i === content.events.length - 1
                    ? 'from-white via-gray-300 to-gray-300'
                    : 'bg-gray-300'
                ]"
              ></div>
            </div>
            <div
              class="absolute w-6 h-6 -mt-3 bg-gray-400 border-4 border-white rounded-full top-1/2"
            ></div>
          </div>
          <XyzTransition
            :appear-visible="{ threshold: 0.5 }"
            duration="auto"
            :style="`--xyz-index: ${i};`"
          >
            <XyzConflict
              xyz="fade down-1 stagger-4 duration-8"
              class="relative p-4 my-6 text-gray-800 transition-transform transform bg-gray-200 rounded-xl"
              endClass="md:hover:-translate-y-2"
              :class="
                i % 2 === 0
                  ? 'col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'
                  : 'col-start-6 col-end-10 mr-auto'
              "
            >
              <h3
                class="text-lg font-semibold lg:text-xl"
                v-html="e.title"
              ></h3>
              <p
                v-if="e.content !== ''"
                class="mt-2 leading-6 text-justify"
                v-html="e.content"
              ></p>
              <span
                class="absolute text-sm text-gray-400 -top-5 left-2 whitespace-nowrap"
                v-html="e.date"
              ></span>
            </XyzConflict>
          </XyzTransition>
          <div
            v-if="i % 2 === 0"
            class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
          >
            <div class="flex items-center justify-center w-6 h-full">
              <div
                class="w-1 h-full bg-gray-300"
                :class="[
                  i === 0 ? 'rounded-t-full bg-gradient-to-b' : '',
                  i === content.events.length - 1
                    ? 'rounded-b-full bg-gradient-to-t'
                    : '',
                  i === 0 || i === content.events.length - 1
                    ? 'from-white via-gray-300 to-gray-300'
                    : 'bg-gray-300 '
                ]"
              ></div>
            </div>
            <div
              class="absolute w-6 h-6 -mt-3 bg-gray-400 border-4 border-white rounded-full top-1/2"
            ></div>
          </div>
        </div>
      </div>
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

<style scoped></style>
