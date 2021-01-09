<template>
  <div class="h-screen bg-gray-50 flex flex-col">
    <Header />
    <div :class="$store.state.header.marginTop ? 'mt-16' : null">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script></script>

<style>
html,
body {
  scroll-behavior: smooth;
  scroll-margin-top: 4rem;
}
</style>
