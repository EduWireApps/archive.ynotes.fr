<template>
  <section class="py-16 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div>
          <div class="text-center">
            <h3
              class="text-base font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500 inline-block xyz-nested"
              xyz="fade down-1 delay-6 duration-15"
              v-html="content.subtitle"
            ></h3>
            <h2
              class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl xyz-nested"
              xyz="fade down-1 delay-3 duration-15"
              v-html="content.title"
            ></h2>
            <p
              class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto xyz-nested"
              xyz="fade down-1 delay-6 duration-15"
              v-html="content.text"
            ></p>
          </div>
          <div class="mt-16 xyz-nested" xyz="delay-15">
            <div
              class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 xyz-nested"
              xyz="fade down-1 delay-6 duration-15 stagger"
            >
              <XyzConflict
                v-for="(e, index) in content.items"
                :key="index"
                class="inline-block p-6 pt-0 text-center transition-transform transform bg-gray-100 rounded-2xl w-full"
                endClass="md:hover:scale-105"
              >
                <div
                  class="relative flex items-center justify-center w-12 h-12 mx-auto mb-6 -mt-6 text-2xl font-semibold text-white rounded-md shadow-xl bg-gradient-to-r from-indigo-500 to-purple-500"
                >
                  <Zondicon :icon="e.icon" class="fill-current h-6 w-6" />
                </div>
                <div
                  class="text-xl font-medium leading-6 text-gray-900"
                  v-html="e.title"
                ></div>
                <div
                  class="mt-2 text-lg text-gray-500"
                  v-html="e.content"
                ></div>
                <img
                  :src="require(`~/assets/${e.imgPath}`)"
                  class="mt-6 w-3/4 md:w-96 xyz-nested mx-auto"
                  xyz="fade down-1 delay-6 duration-15"
                  alt="Illustration"
                />
              </XyzConflict>
            </div>
          </div>
          <div class="mt-16 xyz-nested" xyz="delay-15 fade down-1 duration-10">
            <RecruitementForm :content="content.form"/>
          </div>
        </div>
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
