<template>
  <XyzTransition appear-visible duration="auto" class="md:mt-16">
    <div
      class="flex flex-col mb-8 md:flex-row md:mb-0"
      :class="imgLeft ? 'md:flex-row-reverse' : null"
      xyz="fade delay-4"
    >
      <div
        class="flex items-center w-full text-space-700 text-center md:text-left"
      >
        <div class="text-white mx-auto">
          <div
            v-if="Object.keys(status).length > 0"
            class="inline-block px-3 py-1 mb-2 font-semibold uppercase rounded-full shadow xyz-nested"
            xyz="fade up delay-8 duration-8"
            :class="statusClass"
            v-html="status.text"
          ></div>
          <h2
            class="mb-8 text-2xl font-bold sm:text-3xl lg:text-5xl xyz-nested"
            xyz="fade up delay-3 duration-6"
            v-html="title"
          ></h2>
          <div class="flex" :class="`flex-col${textBefore ? '-reverse' : ''}`">
            <List v-if="els" :texts="els" class="mx-auto md:ml-0 text-left" />
            <p
              v-if="text"
              class="mb-6 md:text-lg lg:text-xl xyz-nested"
              xyz="fade up delay-6 duration-6"
              v-html="text"
            ></p>
          </div>
        </div>
      </div>
      <img
        :src="require(`~/assets/${imgPath}`)"
        class="w-1/2 md:w-1/3 my-auto mx-auto lg:mx-20 lg:w-96 xyz-nested"
        :class="[`md:m${imgLeft ? 'r' : 'l'}-10`]"
        xyz="fade delay-4 up-3"
      />
    </div>
  </XyzTransition>
</template>

<script>
export default {
  props: {
    title: String,
    els: Array,
    imgPath: String,
    imgLeft: Boolean,
    text: String,
    textBefore: Boolean,
    status: {
      type: Object,
      default: () => {
        return {};
      }
    },
    index: Number
  },
  computed: {
    statusClass() {
      if (this.status === {}) return;
      return {
        success: "bg-green-200 text-green-700",
        warning: "bg-yellow-200 text-yellow-700",
        danger: "bg-red-200 text-red-700",
        info: "bg-blue-200 text-blue-700"
      }[this.status.variant];
    }
  }
};
</script>

<style></style>
