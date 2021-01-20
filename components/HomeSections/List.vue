<template>
  <div
    class="lg:text-xl font-medium mb-6 lg:mb-12 flex flex-col space-y-3"
    xyz="fade up stagger ease-in-out delay-8"
  >
    <div
      class="flex items-center xyz-nested"
      v-for="(t, index) in texts"
      :key="index"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-5 h-5 lg:h-6 lg:w-6 absolute"
      >
        <path
          v-if="checkSVG"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p class="ml-5 lg:ml-6 pl-2" v-html="t"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    texts: Array,
    checkSVG: Boolean
  }
};
</script>

<style></style>
