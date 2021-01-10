<template>
  <footer class="mt-auto text-gray-600 border-t">
    <Container class="flex flex-col items-center py-8 md:flex-row">
      <nuxt-link to="/" class="flex items-center space-x-2">
        <img
          src="~/assets/images/logoBlue.png"
          class="w-6 h-6 rounded-lg"
          alt="Logo"
        />
        <div class="text-2xl font-semibold text-space-500">
          yNotes
        </div>
      </nuxt-link>
      <p
        class="mt-4 text-sm text-gray-500 md:ml-4 md:pl-4 md:border-l-2 md:border-gray-200 md:py-2 md:mt-0"
      >
        © {{ new Date().getFullYear() }} yNotes
      </p>
      <span
        class="inline-flex flex-col justify-center mt-4 lg:ml-auto md:mt-0 md:ml-2 md:flex-row lg:justify-start"
      >
        <nuxt-link
          to="/legal/PDCYNotes.pdf"
          target="_blank"
          class="text-gray-500"
        >
          Politique de confidentialité
        </nuxt-link>
        <nuxt-link
          to="/legal/CGUYNotes.pdf"
          target="_blank"
          class="ml-3 text-gray-500"
        >
          Conditions d'utilisation
        </nuxt-link>
      </span>
      <span
        class="inline-flex justify-center mt-2 ml-2 space-x-2 md:mt-0 md:justify-start"
      >
        <a
          :href="`mailto:${content.email}`"
          class="text-gray-500 transition-colors hover:text-space-500"
          aria-label="Nous écrire un mail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-5 h-5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
        <a
          :href="content.discord"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Rejoindre le serveur Discord"
          class="text-gray-500 transition-colors hover:text-space-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
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
        </a>
      </span>
    </Container>
  </footer>
</template>

<script>
import content from "@/assets/content/contact.json";

export default {
  data() {
    return {
      content: content
    };
  }
};
</script>

<style></style>
