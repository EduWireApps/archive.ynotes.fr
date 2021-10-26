<template>
  <section class="pt-12 pb-6 bg-white">
    <Container>
      <XyzTransition appear-visible duration="auto">
        <div class="flex flex-col items-center">
          <h2
            class="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl text-center md:text-left xyz-nested mb-6"
            xyz="fade down-1 delay-3 duration-15"
          >
            Regarder le trailer !
          </h2>
          <div class="w-full lg:w-[50vw]">
            <div
              xyz="fade down-1 delay-6 duration-15"
              class="aspect-w-16 aspect-h-9"
            >
              <iframe
                src="https://www.youtube.com/embed/vqKXYIPjY8Q"
                class="w-full"
                allow="accelerometer; autoplay; clipboard-write; encrytpted-media; gyroscope; picture-in-picture"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </XyzTransition>
    </Container>
  </section>
</template>
