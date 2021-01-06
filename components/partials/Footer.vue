<template>
  <footer class="text-gray-600 body-font mt-auto">
    <Container
      class="py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <nuxt-link
          to="/"
          class="flex items-center space-x-3 md:justify-start justify-center"
        >
          <img
            src="~/assets/images/logoBlue.png"
            class="h-8 w-8 rounded"
            alt="Logo"
          />
          <div class="text-3xl font-semibold text-space-500">
            yNotes
          </div>
        </nuxt-link>
        <p class="mt-2 text-sm text-gray-500">
          Votre application scolaire connectée
        </p>
      </div>
      <div
        class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
      >
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            CATEGORIES
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            CATEGORIES
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            CATEGORIES
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            CATEGORIES
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </Container>
    <div class="bg-gray-100">
      <Container class="py-4 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-500 text-sm text-center sm:text-left">
          © {{ new Date().getFullYear() }} yNotes
        </p>
        <span
          class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
        >
          <a
            href="https://discord.gg/gDWyrbR"
            target="_blank"
            rel="noopener noreferrer"
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
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
