<template>
  <a
    :href="link"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    class="font-semibold transition duration-150 ease-in-out focus:outline-none flex items-center px-2 py-1 rounded-full"
    :class="
      button
        ? topStyle
          ? 'bg-white text-space-500 hover:bg-gray-300'
          : 'bg-gradient-to-r from-space-400 to-space-500 text-white hover:opacity-80'
        : topStyle
        ? 'text-white hover:text-gray-300'
        : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
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
