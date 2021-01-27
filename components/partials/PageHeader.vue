<template>
  <div
    class="flex items-center justify-center py-20 bg-gradient-to-b from-space-700 to-space-500 relative"
  >
    <div
      class="max-w-lg mx-auto text-center text-white sm:max-w-xl md:max-w-none"
    >
      <h1
        class="mb-4 text-4xl font-extrabold text-center sm:text-6xl md:text-4xl lg:text-5xl xl:text-7xl"
        v-html="title"
      ></h1>
      <p
        class="mb-6 text-base font-medium  sm:text-xl lg:text-lg xl:text-xl"
        v-html="subtitle"
      ></p>
      <nuxt-link
        to="/"
        class="absolute top-6 left-6 inline-flex items-center px-3 py-1 mb-5 text-base font-semibold text-white transition duration-150 ease-in-out rounded-md focus:outline-none bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-4 h-4 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Accueil
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style></style>
