<template>
  <div class="home">
    <Hero :content="content.hero" />
    <Warning :content="content.warning" />
    <Project :content="content.project" />
    <HowItWorks :content="content.howitworks" />
    <Features :content="content.features" />
    <DataPolicy :content="content.datapolicy" />
    <Contributors :content="content.contributors" />
    <Recruitement :content="content.recruitement" />
    <Contact :content="content.contact" class="pb-48" />
  </div>
</template>

<script>
import content from "@/assets/content/index.json";

export default {
  data() {
    return {
      content: content
    };
  }
};
</script>

<style>
/* .home h2 {
  @apply relative inline-block z-50 no-underline;
}
.home h2::after {
  content: "";
  @apply absolute z-0 w-full h-6 left-0 -bottom-3 bg-space-300;
  z-index: -1;
} */
</style>
