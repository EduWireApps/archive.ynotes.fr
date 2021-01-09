<template>
  <section class="bg-space-500 py-12">
    <Container>
      <IsVisible v-slot="props" once>
        <template>
          <div>
            <XyzTransition appear duration="auto">
              <div xyz="fade delay-4" v-if="props.show" class="text-center">
                <h2
                  xyz="fade up delay-3 duration-6"
                  class="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 text-white text-center xyz-nested"
                >
                  {{ content.title }}
                </h2>
                <div
                  class="pt-16 text-white max-w-3xl mx-auto"
                  xyz="fade up stagger ease-in-out delay-8"
                >
                  <Step
                    v-for="(s, index) in content.steps"
                    :key="index"
                    :svg="s.svg"
                    :title="s.title"
                    :content="s.content"
                    :last="index == Object.keys(content.steps).length - 1"
                  />
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
