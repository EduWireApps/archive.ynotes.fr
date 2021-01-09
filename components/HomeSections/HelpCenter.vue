<template>
  <section class="bg-space-500 py-12 shadow-xl">
    <Container>
      <IsVisible v-slot="props" once>
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
                <p
                  xyz="fade up delay-6 duration-6"
                  class="mb-12 text-xl xyz-nested text-center text-white"
                >
                  {{ content.content }}
                </p>
                <div class="flex justify-center">
                  <nuxt-link
                    :to="content.link.link"
                    xyz="fade up delay-8 duration-6"
                    class="xyz-nested text-center inline-block duration-150 ease-in-out focus:outline-none px-6 py-4 text-xl uppercase font-semibold rounded-full transition-colors bg-white text-space-500 hover:bg-gray-200"
                  >
                    {{ content.link.text }}
                  </nuxt-link>
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
