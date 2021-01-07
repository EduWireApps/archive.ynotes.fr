<template>
  <section class="bg-space-400 py-12 shadow-xl">
    <Container>
      <IsVisible v-slot="props">
        <template>
          <div>
            <XyzTransition appear duration="auto">
              <div xyz="fade delay-4" v-if="props.show">
                <h2
                  xyz="fade up delay-3 duration-6"
                  class="text-5xl font-bold mb-8 text-white text-center xyz-nested"
                >
                  {{ content.title }}
                </h2>
                <div class="space-y-8 xyz-nested" xyz="fade up-2 delay-4">
                  <div
                    v-for="(e, index) in content.items"
                    :key="index"
                    class="flex items-center xyz-nested"
                    :class="index % 2 === 0 ? null : 'flex-row-reverse'"
                  >
                    <div
                      class="bg-white rounded-full inline-flex items-center justify-center flex-shrink-0 w-80 h-80 shadow-2xl animate-float"
                      :class="index % 2 === 0 ? 'ml-20' : 'mr-20'"
                      :style="`animation-delay:${index * 200}ms`"
                    >
                      <img
                        :src="require(`~/assets/${e.imgPath}`)"
                        class="w-48"
                      />
                    </div>
                    <div class="w-full text-white px-20">
                      <h3 class="text-4xl font-semibold mb-3">
                        {{ e.title }}
                      </h3>
                      <p class="mb-6 text-xl text-justify">
                        {{ e.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </XyzTransition>
          </div>
        </template>
      </IsVisible>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  },
  mounted() {
    let array = [0, 1, 2, 3, 4, 5, 6];
    for (let index = 0; index < array.length; index++) {
      console.log(array[index] + " " + (index % 2));
    }
  }
};
</script>

<style></style>
