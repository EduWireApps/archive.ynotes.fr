<template>
  <IsVisible v-slot="props">
    <template>
      <div>
        <XyzTransition appear duration="auto">
          <div
            class="flex"
            :class="imgLeft ? 'flex-row-reverse' : null"
            v-if="props.show"
            xyz="fade delay-4"
          >
            <div class="w-full text-space-700 flex items-center">
              <div class="text-white">
                <div
                  v-if="status !== {}"
                  class="uppercase font-semibold px-3 py-1 rounded-full inline-block mb-2 shadow xyz-nested"
                  xyz="fade up delay-8 duration-8"
                  :class="statusClass"
                >
                  {{ status.text }}
                </div>
                <h2
                  class="text-5xl font-bold mb-8 xyz-nested"
                  xyz="fade up delay-3 duration-6"
                >
                  {{ title }}
                </h2>
                <div
                  class="flex"
                  :class="`flex-col${textBefore ? '-reverse' : ''}`"
                >
                  <List v-if="els" :texts="els" />
                  <p
                    v-if="text"
                    class="mb-6 text-xl xyz-nested"
                    xyz="fade up delay-6 duration-6"
                  >
                    {{ text }}
                  </p>
                </div>
              </div>
            </div>
            <img
              :src="require(`~/assets/${imgPath}`)"
              class="w-96 mx-20 xyz-nested animate-float"
              xyz="fade delay-4 up-3"
              :style="`animation-delay:${index * 200}ms`"
            />
          </div>
        </XyzTransition>
      </div>
    </template>
  </IsVisible>
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
