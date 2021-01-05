<template>
  <div class="h-screen bg-gray-50 flex flex-col scroll-smooth">
    <Header />
    <div :class="$store.state.header.marginTop ? 'mt-16' : null">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style>
.scroll-smooth {
  scroll-behavior: smooth;
}
</style>
