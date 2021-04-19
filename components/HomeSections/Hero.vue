<template>
  <XyzTransition appear duration="auto">
    <section
      class="min-h-screen md:h-screen bg-gradient-to-b from-space-700 to-space-500"
    >
      <Container class="flex flex-col h-full py-16 md:flex-row-reverse">
        <div class="flex flex-col justify-center flex-1 md:flex-auto md:w-3/5">
          <a
            :href="require('~/assets/content/contact.json').repo"
            target="_blank"
            rel="noopener noreferrer"
            xyz="fade delay-20 duration-15"
            class="flex items-center p-1 pr-2 mx-auto mb-4 space-x-3 text-sm text-white transition-colors rounded-full shadow-lg md:ml-0 h-7 lg:text-base lg:h-8 xyz-nested bg-space-400 w-max hover:bg-space-300 group hover:shadow-2xl"
          >
            <span
              class="px-2 py-1 text-xs leading-tight uppercase transition-colors rounded-full lg:text-sm bg-space-500 leading-1 group-hover:bg-space-400"
              v-html="content.badge.badge"
            ></span
            ><span v-html="content.badge.text"></span
            ><Zondicon icon="cheveron-right" class="w-5 h-5 fill-current" />
          </a>
          <h1
            class="mb-4 text-4xl font-extrabold text-center sm:text-6xl md:text-left md:text-4xl lg:text-5xl xl:text-7xl xyz-nested"
            xyz="fade down-1 delay-3 duration-15 stagger"
          >
            <span
              class="text-white xyz-nested"
              v-html="content.title[1]"
            ></span>
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-purple-500 xyz-nested"
              v-html="content.title[2]"
            ></span>
          </h1>
          <p
            class="max-w-lg mx-auto mb-6 text-base font-medium text-justify sm:text-xl lg:text-lg xl:text-xl text-space-100 xyz-nested sm:max-w-xl md:max-w-none"
            xyz="fade down-1 delay-10 duration-20"
            v-html="content.text"
          ></p>
          <div
            class="w-full xyz-nested md:ml-0"
            xyz="fade down-1 duration-15 delay-20"
          >
            <div
              class="flex flex-col justify-between items-center md:items-start space-y-6 md:space-y-4 lg:space-y-6"
            >
              <div class="flex flex-col items-center md:items-start">
                <div class="flex space-x-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=fr.ynotes"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-5 py-3 transition-shadow bg-white rounded-lg shadow focus:outline-none whitespace-nowrap text-space-400 hover:shadow-2xl"
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
                  <button
                    class="inline-flex items-center px-5 py-3 bg-white rounded-lg shadow opacity-75 cursor-not-allowed focus:outline-none whitespace-nowrap text-space-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="w-6 h-6"
                      viewBox="0 0 305 305"
                    >
                      <path
                        d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                      ></path>
                      <path
                        d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                      ></path>
                    </svg>
                    <span class="flex flex-col items-start ml-4 leading-none">
                      <span class="mb-1 text-xs">Bientôt sur</span>
                      <span class="font-medium">App Store</span>
                    </span>
                  </button>
                </div>
                <a
                  :href="content.subdownload.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center mt-2 space-x-1 text-sm transition-colors text-space-100 hover:text-white"
                  ><span v-html="content.subdownload.text"></span
                  ><Zondicon
                    icon="cheveron-right"
                    class="w-5 h-5 fill-current"
                  />
                </a>
              </div>
              <div class="flex items-center space-x-2">
                <div
                  class="text-sm lg:text-base text-space-100"
                  v-html="content.services.text"
                ></div>
                <div class="flex items-center justify-between space-x-2">
                  <a
                    v-for="(e, i) in content.services.list"
                    :key="i"
                    :href="e.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center w-10 lg:w-12 lg:h-12 h-10 bg-white rounded-full bg-opacity-90"
                  >
                    <img
                      :src="require(`~/assets/${e.src}`)"
                      class="p-0.5"
                      :alt="e.alt"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center flex-1 md:flex-auto md:w-2/5">
          <img
            src="~/assets/images/phoneScreen.png"
            class="w-full mx-auto md:px-6 xyz-nested"
            xyz="fade left-4 delay-10 duration-10"
            alt="Phone mockups"
          />
        </div>
      </Container>
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
