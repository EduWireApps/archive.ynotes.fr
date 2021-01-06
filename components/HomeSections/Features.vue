<template>
  <section class="bg-gradient-to-b from-space-400 to-space-500">
    <Container>
      <Feature
        v-for="(f, index) in content"
        :key="index"
        :title="f.title"
        :els="f.keypoints"
        :imgPath="f.imgPath"
        :imgLeft="f.imgLeft"
        :text="f.text"
        :textBefore="f.textBefore"
      />
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    content: Array
  }
};
</script>

<style></style>
