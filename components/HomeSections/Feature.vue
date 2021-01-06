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
                  <p v-if="text" class="mb-6 text-xl">
                    {{ text }}
                  </p>
                </div>
              </div>
            </div>
            <img
              :src="require(`~/assets/${imgPath}`)"
              class="w-96 mx-20 xyz-nested"
              xyz="fade delay-4 up-3"
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
    textBefore: Boolean
  }
};
</script>

<style></style>
