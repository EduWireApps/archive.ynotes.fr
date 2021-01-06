<template>
  <XyzTransition appear duration="auto">
    <section
      class="flex bg-gradient-to-t from-space-400 to-space-500 h-screen pt-16"
    >
      <div class="w-1/2 h-full p-10">
        <img
          xyz="fade left delay-4"
          src="~/assets/images/phoneScreen.png"
          class="h-full mx-auto xyz-nested"
          alt=""
        />
      </div>
      <div class="w-1/2 p-10 h-full flex items-center">
        <div class="text-white">
          <h1
            class="text-6xl font-bold mb-8 xyz-nested"
            xyz="fade up delay-3 duration-6"
          >
            {{ content.cta }}
          </h1>
          <List :texts="content.keypoints" />
          <div xyz="fade up stagger ease-in-out delay-20">
            <h2 class="text-3xl font-semibold mb-3 xyz-nested">
              {{ content.download }}
            </h2>
            <a
              href="https://play.google.com/store/apps/details?id=fr.ynotes"
              target="_blank"
              rel="noopener noreferrer"
              class="shadow inline-flex py-3 px-5 rounded-lg items-center focus:outline-none bg-white text-space-500 hover:bg-gray-300 hover:text-space-700 transition duration-200 ease-out xyz-nested"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path
                  d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                ></path>
              </svg>
              <span
                class="ml-4 flex items-start flex-col leading-none whitespace-nowrap"
              >
                <span class="text-xs mb-1">Disponible sur</span>
                <span class="title-font font-medium">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </XyzTransition>
</template>

<script>
export default {
  props: {
    content: Object
  }
};
</script>

<style></style>
