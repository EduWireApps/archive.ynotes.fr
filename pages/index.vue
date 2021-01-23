<template>
  <div class="home">
    <Hero :content="content.hero" />
    <Warning :content="content.warning" />
    <FeaturesSection :content="content.project" />
    <FeaturesSection :content="content.howitworks" />
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

<style></style>
