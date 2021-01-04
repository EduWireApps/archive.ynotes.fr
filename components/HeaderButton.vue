<template>
  <a
    :href="link"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    class="font-semibold transition duration-150 ease-in-out focus:outline-none flex items-center px-2 py-1 rounded-full"
    :class="button ? 'bg-space-500 text-white hover:bg-space-400' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    external: {
      type: Boolean,
      default: false
    },
    link: String,
    button: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
