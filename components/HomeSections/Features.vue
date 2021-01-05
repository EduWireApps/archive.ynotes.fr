<template>
  <section class="bg-gradient-to-b from-space-400 to-space-500">
    <Container>
      <Feature
        :texts="[
          'Vos notes',
          'Votre messagerie',
          'Votre agenda',
          'Vos devoirs'
        ]"
        imgPath="~/assets/images/phoneScreen.png"
      />
      <XyzTransition appear duration="auto">
        <div class="flex">
          <div class="w-full text-space-700 flex items-center">
            <div class="text-white">
              <h2
                class="text-5xl font-bold mb-8 xyz-nested"
                xyz="fade up delay-3 duration-6"
              >
                Toutes les fonctionnalités de base...
              </h2>
              <List
                :texts="[
                  'Vos notes',
                  'Votre messagerie',
                  'Votre agenda',
                  'Vos devoirs'
                ]"
              />
            </div>
          </div>
          <img
            src="~/assets/images/phoneScreen.png"
            class="w-96 mx-20 xyz-nested"
            xyz="fade right delay-4"
          />
        </div>
      </XyzTransition>
    </Container>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
