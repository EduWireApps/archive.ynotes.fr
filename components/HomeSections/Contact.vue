<template>
  <section class="py-12 bg-space-500">
    <Container>
      <IsVisible v-slot="props" once>
        <template>
          <div>
            <XyzTransition duration="auto">
              <div xyz="fade delay-4" :class="props.show ? 'xyz-in' : 'xyz-out'">
                <h2
                  xyz="fade up delay-3 duration-6"
                  class="mb-8 text-2xl font-bold text-center text-white sm:text-3xl lg:text-5xl xyz-nested"
                >
                  {{ content.title }}
                </h2>
                <p
                  xyz="fade up delay-6 duration-6"
                  class="mb-12 text-center text-white md:text-lg lg:text-xl xyz-nested"
                >
                  {{ content.content }}
                </p>
                <div class="flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <nuxt-link
                    v-for="(l, i) in content.links"
                    :key="i"
                    :to="l.url"
                    xyz="fade up delay-8 duration-6"
                    class="inline-block px-6 py-4 text-xl font-semibold text-center uppercase transition-colors duration-150 ease-in-out bg-white rounded-full xyz-nested focus:outline-none text-space-500 hover:bg-gray-200"
                  >
                    {{ l.text }}
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
