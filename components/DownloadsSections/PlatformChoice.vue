<template>
  <button
    type="button"
    @click="$emit('onClicked')"
    :class="
      `inline-flex cursor-pointer items-center justify-center flex-nowrap rounded-lg px-5 py-2.5 space-x-2 hover:bg-gray-200 transition-colors focus:outline-none ${
        selected
          ? 'bg-space-400 hover:bg-space-400 text-white'
          : 'bg-gray-300 text-gray-800'
      }`
    "
  >
    <svg
      class="w-5 h-5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path :d="content.icon" />
    </svg>
    <div class="text-xl font-medium leading-6" v-html="content.name"></div>
  </button>
</template>

<script>
export default {
  props: {
    content: Object,
    selected: Boolean
  }
};
</script>
