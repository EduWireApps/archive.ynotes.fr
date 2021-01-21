<template>
  <XyzTransition appear duration="auto">
    <section class="md:h-screen bg-space-700">
      <Container class="flex h-full py-16 flex-col md:flex-row-reverse">
        <div class="flex flex-col justify-center flex-1">
          <a
            :href="require('~/assets/content/contact.json').repo"
            target="_blank"
            rel="noopener noreferrer"
            xyz="fade delay-15 duration-8"
            class="flex items-center mx-auto md:ml-0 h-7 text-sm lg:text-base lg:h-8 p-1 pr-2 mb-4 space-x-3 text-white transition-colors rounded-full shadow-lg xyz-nested bg-space-400 w-max hover:bg-space-300 group hover:shadow-2xl"
          >
            <span
              class="px-2 py-1 text-xs lg:text-sm leading-tight uppercase transition-colors rounded-full bg-space-500 leading-1 group-hover:bg-space-400"
              v-html="content.badge.badge"
            ></span
            ><span v-html="content.badge.text"></span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-4 h-4"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <h1
            class="mb-4 font-extrabold text-white text-4xl sm:text-6xl text-center md:text-left md:text-4xl lg:text-5xl xl:text-7xl xyz-nested"
            xyz="fade down-1 delay-3 duration-15 stagger"
          >
            <span class="xyz-nested" v-html="content.title[1]"></span>
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-space-300 to-purple-500 xyz-nested"
              v-html="content.title[2]"
            ></span>
          </h1>
          <p
            class="mb-6 text-base sm:text-xl lg:text-lg xl:text-xl font-medium text-justify text-space-300 xyz-nested max-w-lg mx-auto sm:max-w-xl md:max-w-none"
            xyz="fade delay-15 duration-10"
            v-html="content.text"
          >
          </p>
          <div
            class="block xyz-nested mx-auto md:ml-0"
            xyz="fade down-1 duration-15 delay-20"
          >
            <a
              href="https://play.google.com/store/apps/details?id=fr.ynotes"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-5 py-3 transition-colors bg-white rounded-lg shadow hover:bg-gray-100 focus:outline-none whitespace-nowrap text-space-600 hover:shadow-xl"
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
              <span class="flex flex-col items-start ml-4 leading-none">
                <span class="mb-1 text-xs">Disponible sur</span>
                <span class="font-medium">Google Play</span>
              </span>
            </a>
          </div>
        </div>
        <div class="flex-1">
          <img
            src="~/assets/images/phoneScreen.png"
            class="w-full sm:w-3/4 md:w-auto md:h-full mx-auto xyz-nested"
            xyz="fade left-4 delay-10 duration-10"
            alt=""
          />
        </div>
      </Container>
    </section>
    <!-- <section
      class="flex flex-col-reverse p-0 md:pb-10 lg:h-screen bg-gradient-to-b from-space-500 to-space-400 md:flex-row"
    >
      <div class="w-full h-full p-5 md:w-1/2 md:p-10">
        <img
          xyz="fade left delay-4"
          src="~/assets/images/phoneScreen.png"
          class="px-10 mx-auto lg:px-0 lg:h-full xyz-nested"
          alt=""
        />
      </div>
      <div
        class="flex items-center justify-center w-full h-full max-w-lg p-5 pt-16 mx-auto md:pt-0 md:w-1/2 md:p-10 md:max-w-none md:my-auto"
      >
        <div class="text-white">
          <h1
            class="mb-4 text-3xl font-bold text-center sm:text-4xl lg:text-6xl md:mb-8 xyz-nested md:text-left"
            xyz="fade up delay-3 duration-6"
            v-html="content.cta"
          ></h1>
          <List :texts="content.keypoints" :checkSVG="content.checkSVG" />
          <div
            xyz="fade up stagger ease-in-out delay-20"
            class="flex flex-col justify-center mb-4 lg:mb-8 md:justify-start"
          >
            <h2
              class="mx-auto mb-3 text-xl font-semibold lg:text-3xl xyz-nested whitespace-nowrap md:ml-0"
              v-html="content.download"
            ></h2>
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
    </section> -->
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
