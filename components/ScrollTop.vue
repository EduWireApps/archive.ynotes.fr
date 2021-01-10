<template>
  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <button
      class="fixed z-50 w-10 h-10 p-2 text-white rounded-full bg-space-300 bottom-4 right-4 hover:bg-opacity-75 transition-all transform hover:scale-110 focus:outline-none"
      type="button"
      v-show="visible"
      aria-label="Scroll to top"
      v-scroll-to="'header'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
      }, 20);
    },
    scrollListener(e) {
      this.visible = window.scrollY > 200;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style></style>
