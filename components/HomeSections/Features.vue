<template>
  <section class="bg-gradient-to-b from-space-400 to-space-500">
    <Container class="py-20">
      <Feature
        v-for="(f, index) in content"
        :key="index"
        :title="f.title"
        :els="f.keypoints"
        :imgPath="f.imgPath"
        :imgLeft="f.imgLeft"
        :text="f.text"
        :textBefore="f.textBefore"
        :status="f.status"
        :index="index"
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
