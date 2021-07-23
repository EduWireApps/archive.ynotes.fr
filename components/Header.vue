<template>
  <header>
    <div
      class="fixed top-0 left-0 z-50 flex items-center w-screen h-16 transition-colors sm:shadow-2xl bg-white bg-opacity-95"
      :class="open ? null : 'shadow-2xl'"
    >
      <Container class="flex items-center justify-between">
        <nuxt-link
          to="/"
          class="flex items-center space-x-3 focus:outline-none"
        >
          <img
            src="~/assets/images/logoBlue.png"
            class="w-8 h-8 rounded-xl"
            alt="Logo"
          />
          <div class="text-3xl font-semibold text-space-500">
            yNotes
          </div>
        </nuxt-link>
        <button
          @click="open = !open"
          class="inline-flex items-center justify-center p-2 transition-colors rounded-full sm:hidden hover:bg-opacity-25 focus:outline-none text-space-500 hover:bg-space-200"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="block w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="open"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div class="items-center hidden space-x-2 sm:flex">
          <HeaderButton link="/">Accueil</HeaderButton>
          <HeaderButton link="/faq">FAQ</HeaderButton>
          <HeaderButton link="https://support.ynotes.fr" external
            >Centre d'aide</HeaderButton
          >
          <HeaderButton link="/contact">Contact</HeaderButton>
          <HeaderButton link="/downloads">Téléchargements</HeaderButton>
          <HeaderButton
            :link="require('~/assets/content/contact.json').repo"
            external
            button
            class="transition-colors"
            >Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-2"
              viewBox="0 0 16 16"
              version="1.1"
              fill="currentColor"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </HeaderButton>
        </div>
      </Container>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        class="fixed left-0 w-full shadow-2xl sm:hidden top-16 z-40 bg-white"
        v-show="open"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <HeaderButton link="/">Accueil</HeaderButton>
          <HeaderButton link="/faq">FAQ</HeaderButton>
          <HeaderButton link="https://support.ynotes.fr" external
            >Centre d'aide</HeaderButton
          >
          <HeaderButton link="/contact">Contact</HeaderButton>
          <HeaderButton
            :link="require('~/assets/content/contact.json').repo"
            external
            button
            class="transition-colors"
            >Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-2"
              viewBox="0 0 16 16"
              version="1.1"
              fill="currentColor"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </HeaderButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  }
};
</script>

<style></style>
