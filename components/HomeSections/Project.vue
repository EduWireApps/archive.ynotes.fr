<template>
  <section class="py-16 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div>
          <div class="lg:text-center">
            <h3
              class="text-base font-semibold tracking-wide uppercase text-space-400"
              v-html="content.subtitle"
            ></h3>
            <h2
              class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl"
              v-html="content.title"
            ></h2>
            <p
              class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto"
              v-html="content.text"
            ></p>
          </div>
          <div class="mt-10">
            <dl
              class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10"
            >
              <div
                v-for="(e, index) in content.items"
                :key="index"
                class="transition-transform transform md:hover:scale-105"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-md bg-space-400"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      v-if="e.icon === 'academic-cap'"
                      class="text-space-400"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      v-if="e.icon === 'academic-cap'"
                      class="text-space-400"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      v-if="e.icon === 'academic-cap'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                    <path
                      v-if="e.icon === 'code'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                    <path
                      v-if="e.icon === 'chat-alt-2'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <dt
                  class="text-lg font-medium leading-6 text-gray-900"
                  v-html="e.title"
                ></dt>
                <dd
                  class="mt-2 text-base text-justify text-gray-500"
                  v-html="e.content"
                ></dd>
              </div>
            </dl>
          </div>
        </div>
        <!-- <div xyz="fade delay-4">
          <h2
            xyz="fade up delay-3 duration-6"
            class="mb-8 text-2xl font-bold text-center text-white sm:text-3xl lg:text-5xl xyz-nested"
            v-html="content.title"
          ></h2>
          <div class="space-y-8" xyz="fade up-2 delay-8 duration-10 stagger">
            <div
              v-for="(e, index) in content.items"
              :key="index"
              class="flex flex-col items-center lg:flex-row xyz-nested"
              :class="index % 2 === 0 ? null : 'lg:flex-row-reverse'"
            >
              <Floating>
                <div
                  class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 bg-white rounded-full shadow-2xl lg:w-80 lg:h-80"
                  :class="index % 2 === 0 ? 'lg:ml-20' : 'lg:mr-20'"
                >
                  <img
                    :src="require(`~/assets/${e.imgPath}`)"
                    class="w-12 lg:w-48"
                  />
                </div>
              </Floating>
              <div class="w-full mt-6 text-white lg:px-20 lg:mt-0">
                <h3
                  class="mb-3 text-xl font-semibold text-center md:text-2xl lg:text-4xl lg:text-left"
                  v-html="e.title"
                ></h3>
                <p
                  class="mb-6 text-justify md:text-lg lg:text-xl"
                  v-html="e.content"
                ></p>
              </div>
            </div>
          </div>
        </div> -->
      </XyzTransition>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  }
};
</script>

<style></style>
