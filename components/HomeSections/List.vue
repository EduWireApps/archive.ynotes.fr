<template>
  <h3
    class="text-xl font-medium mb-12 flex flex-col space-y-3"
    xyz="fade up stagger ease-in-out delay-8"
  >
    <div
      class="flex space-x-2 items-center xyz-nested"
      v-for="(t, index) in texts"
      :key="index"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ t }}</span>
    </div>
  </h3>
</template>

<script>
export default {
  props: {
    texts: Array
  }
};
</script>

<style></style>
