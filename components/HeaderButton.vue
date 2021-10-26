<template>
  <a
    :href="link"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    class="items-center px-3 py-1.5 text-base font-medium transition duration-150 ease-in-out rounded-md md:font-semibold focus:outline-none md:px-2 md:py-1 md:rounded-full"
    :class="
      button
        ? 'bg-gradient-to-r from-space-400 to-space-500 text-white hover:opacity-80 inline-flex'
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
  }
};
</script>

<style></style>
