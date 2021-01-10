<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Header />
    <div class="mt-16">
      <Nuxt />
    </div>
    <ScrollTop />
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
