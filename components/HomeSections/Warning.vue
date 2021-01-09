<template>
  <section class="bg-space-400 py-12 shadow-xl">
    <Container>
      <IsVisible v-slot="props" once>
        <template>
          <div>
            <XyzTransition appear duration="auto">
              <div
                class="rounded-xl bg-red-100 py-4 px-8"
                role="alert"
                v-if="props.show"
                xyz="fade"
              >
                <h3
                  class="font-bold text-2xl text-red-600 flex items-center mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-8 w-8 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    /></svg
                  >{{ content.title }}
                </h3>
                <p class="text-justify text-red-500 font-medium text-lg" v-html="content.text">
                </p>
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
