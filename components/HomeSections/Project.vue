<template>
  <section class="bg-space-400 py-12">
    <Container>
      <IsVisible v-slot="props" once>
        <template>
          <div>
            <XyzTransition duration="auto">
              <div xyz="fade delay-4" :class="props.show ? 'xyz-appear' : null">
                <h2
                  xyz="fade up delay-3 duration-6"
                  class="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 text-white text-center xyz-nested"
                >
                  {{ content.title }}
                </h2>
                <div
                  class="space-y-8"
                  xyz="fade up-2 delay-8 duration-10 stagger"
                >
                  <div
                    v-for="(e, index) in content.items"
                    :key="index"
                    class="flex flex-col lg:flex-row items-center xyz-nested"
                    :class="index % 2 === 0 ? null : 'lg:flex-row-reverse'"
                  >
                    <Floating>
                      <div
                        class="bg-white rounded-full inline-flex items-center justify-center flex-shrink-0 w-24 h-24 lg:w-80 lg:h-80 shadow-2xl"
                        :class="index % 2 === 0 ? 'lg:ml-20' : 'lg:mr-20'"
                      >
                        <img
                          :src="require(`~/assets/${e.imgPath}`)"
                          class="w-12 lg:w-48"
                        />
                      </div>
                    </Floating>
                    <div class="w-full text-white lg:px-20 mt-6 lg:mt-0">
                      <h3
                        class="text-xl md:text-2xl lg:text-4xl font-semibold mb-3 text-center lg:text-left"
                      >
                        {{ e.title }}
                      </h3>
                      <p class="mb-6 md:text-lg lg:text-xl text-justify">
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
  }
};
</script>

<style></style>
