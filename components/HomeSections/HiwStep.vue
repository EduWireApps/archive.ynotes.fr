<template>
  <div class="flex relative pb-12 xyz-nested">
    <div
      v-if="!last"
      class="h-full w-10 absolute inset-0 flex items-center justify-center xyz-nested"
      xyz="delay-15 fade"
    >
      <div class="h-full w-1 bg-space-200 pointer-events-none"></div>
    </div>
    <div
      class="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-space-500 relative z-10 shadow"
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
      </svg>
    </div>
    <div class="flex-grow pl-4">
      <h2
        class="text-2xl font-semibold mb-1 uppercase tracking-wide xyz-nested"
      >
        {{ title }}
      </h2>
      <p class="text-xl">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: { svg: String, title: String, content: String, last: Boolean }
};
</script>

<style></style>
