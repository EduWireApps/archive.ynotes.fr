<template>
  <div class="relative flex pb-12 xyz-nested">
    <div
      v-if="!last"
      class="absolute inset-0 flex items-center justify-center w-10 h-full xyz-nested"
      xyz="delay-15 fade"
    >
      <div class="w-1 h-full pointer-events-none bg-space-200"></div>
    </div>
    <div
      class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 bg-white rounded-full shadow text-space-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="svg == 'login'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        ></path>
        <path
          v-if="svg == 'cog'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        ></path>
        <path
          v-if="svg == 'cog'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
        <path
          v-if="svg == 'cloud-download'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        ></path>
        <path
          v-if="svg == 'tick'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 11.08V12a10 10 0 11-5.93-9.14"
        ></path>
        <path
          v-if="svg == 'tick'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 4L12 14.01l-3-3"
        ></path>
        <path
          v-if="svg == 'folder'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        ></path>
        <path
          v-if="svg == 'cloud-upload'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        ></path>
        <path
          v-if="svg == 'currency-dollar'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
        <path
          v-if="svg == 'question-mark-circle'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div class="flex-grow pl-4">
      <h3
        class="mb-1 text-lg font-semibold tracking-wide uppercase md:text-xl lg:text-2xl xyz-nested"
        v-html="title"
      ></h3>
      <p class="lg:text-xl md:text-lg text-justify" v-html="content"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: { svg: String, title: String, content: String, last: Boolean }
};
</script>

<style></style>
