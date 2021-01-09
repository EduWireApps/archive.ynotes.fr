<template>
  <Container class="py-12 text-center">
    <h1
      class="mb-4 text-3xl font-bold sm:text-4xl lg:text-6xl md:mb-8 text-space-500"
    >
      {{ content.title }}
    </h1>
    <div
      class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 text-white mt-6"
    >
      <a
        :href="`mailto:${content.email}`"
        class="flex flex-col items-center md:w-48 md:h-48 lg:w-64 lg:h-64 p-4 transition-all transform shadow-lg bg-space-500 rounded-3xl hover:bg-space-400 md:hover:-translate-y-4 hover:shadow-2xl hover:-translate-y-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-3/4"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h3 class="mt-auto text-2xl font-semibold">Email</h3>
      </a>
      <a
        :href="content.discord"
        class="flex flex-col items-center md:w-48 md:h-48 lg:w-64 lg:h-64 p-4 transition-all transform shadow-lg bg-space-500 rounded-3xl hover:bg-space-400 md:hover:-translate-y-4 hover:shadow-2xl hover:-translate-y-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3/4"
          fill="currentColor"
          viewBox="0 0 245 240"
        >
          <path
            d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
          ></path>
          <path
            d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
          ></path>
        </svg>
        <h3 class="mt-auto text-2xl font-semibold">Serveur Discord</h3>
      </a>
      <a
        :href="`${content.repo}/issues/new`"
        class="flex flex-col items-center md:w-48 md:h-48 lg:w-64 lg:h-64 p-4 transition-all transform shadow-lg bg-space-500 rounded-3xl hover:bg-space-400 md:hover:-translate-y-4 hover:shadow-2xl hover:-translate-y-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          version="1.1"
          fill="currentColor"
          class="w-3/4"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <h3 class="mt-auto text-2xl font-semibold">Github issue</h3>
      </a>
    </div>
  </Container>
</template>

<script>
import content from "@/assets/content/contact.json";
export default {
  data() {
    return {
      content: content
    };
  },
  mounted() {
    this.$store.commit("header/settopStyle", { t: false });
    this.$store.commit("header/setMarginTop", { m: true });
  }
};
</script>

<style></style>
