<template>
  <XyzTransition appear duration="auto">
    <section
      class="min-h-screen md:h-screen bg-gradient-to-b from-space-700 to-space-500"
    >
      <Container class="flex flex-col h-full py-16 md:flex-row-reverse">
        <div class="flex flex-col justify-center flex-1">
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
            <div class="flex flex-col justify-between md:flex-row">
              <div>
                <div class="flex flex-col items-center md:items-start">
                  <a
                    href="https://play.google.com/store/apps/details?id=fr.ynotes"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-5 py-3 transition-all transform bg-white rounded-lg shadow focus:outline-none whitespace-nowrap text-space-400 hover:shadow-xl hover:-translate-y-1"
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
              </div>
              <div class="mx-auto mt-6 md:mr-0 md:mt-0">
                <div
                  class="mb-1 text-sm text-space-100"
                  v-html="content.services"
                ></div>
                <div class="flex items-center justify-between space-x-2">
                  <a
                    href="https://www.ecoledirecte.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="~/assets/images/logo_ecoledirecte.png"
                      class="w-16"
                      alt="Logo Ecole Directe"
                    />
                  </a>
                  <a
                    href="https://www.index-education.com/fr/logiciel-gestion-vie-scolaire.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="~/assets/images/logo_pronote.png"
                      class="w-12"
                      alt="logo Pronote"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center flex-1">
          <img
            src="~/assets/images/phoneScreen.png"
            class="w-full mx-auto sm:w-3/4 md:w-auto lg:h-full xyz-nested"
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
