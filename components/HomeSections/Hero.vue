<template>
  <XyzTransition appear duration="auto">
    <section
      class="flex flex-col-reverse pt-16 lg:h-screen bg-gradient-to-b from-space-500 to-space-400 md:flex-row"
    >
      <div class="w-full h-full p-5 md:w-1/2 md:p-10">
        <img
          xyz="fade left delay-4"
          src="~/assets/images/phoneScreen.png"
          class="mx-auto px-10 lg:px-0 lg:h-full xyz-nested"
          alt=""
        />
      </div>
      <div
        class="flex items-center justify-center w-full h-full max-w-lg p-5 pt-16 md:pt-0 mx-auto md:w-1/2 md:p-10 md:max-w-none md:my-auto"
      >
        <div class="text-white">
          <h1
            class="mb-4 text-3xl font-bold text-center sm:text-4xl lg:text-6xl md:mb-8 xyz-nested md:text-left"
            xyz="fade up delay-3 duration-6"
          >
            {{ content.cta }}
          </h1>
          <List :texts="content.keypoints" />
          <div
            xyz="fade up stagger ease-in-out delay-20"
            class="flex flex-col justify-center mb-4 lg:mb-8 md:justify-start"
          >
            <h3
              class="mx-auto mb-3 text-xl font-semibold lg:text-3xl xyz-nested whitespace-nowrap md:ml-0"
            >
              {{ content.download }}
            </h3>
            <a
              href="https://play.google.com/store/apps/details?id=fr.ynotes"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-5 py-3 mx-auto transition duration-200 ease-out bg-white rounded-lg shadow md:ml-0 focus:outline-none text-space-500 hover:bg-gray-300 hover:text-space-700 xyz-nested"
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
                class="flex flex-col items-start ml-4 leading-none whitespace-nowrap"
              >
                <span class="mb-1 text-xs">Disponible sur</span>
                <span class="font-medium title-font">Google Play</span>
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
