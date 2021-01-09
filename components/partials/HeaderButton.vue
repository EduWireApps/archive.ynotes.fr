<template>
  <a
    :href="link"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    class="items-center px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md sm:font-semibold focus:outline-none sm:px-2 sm:py-1 sm:rounded-full"
    :class="
      button
        ? topStyle
          ? 'bg-white text-space-500 hover:bg-gray-200 inline-flex'
          : 'bg-gradient-to-r from-space-400 to-space-500 text-white hover:opacity-80 inline-flex'
        : topStyle
        ? 'text-white sm:hover:text-gray-300 hover:bg-space-400 sm:hover:bg-transparent flex'
        : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900 flex'
    "
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
  },
  computed: {
    topStyle() {
      return this.$store.state.header.topStyle;
    }
  }
};
</script>

<style></style>
