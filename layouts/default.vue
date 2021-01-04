<template>
  <div class="h-screen bg-gray-50 flex flex-col scroll-smooth">
    <Header />
    <div class="mt-16">
      <Container>
        <div class="my-10">
          <Nuxt />
        </div>
      </Container>
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
