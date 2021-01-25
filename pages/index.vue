<template>
  <div class="home">
    <Hero :content="content.hero" />
    <Warning :content="content.warning" />
    <FeaturesSection :content="content.project" />
    <FeaturesSection :content="content.howitworks" />
    <!-- <ShowcaseSection
      :content="content.howitworks"
      componentName="ShowHomework"
    /> -->
    <FeatureSection
      v-for="(e, index) in content.features"
      :key="index"
      :content="e"
      :left="index % 2 === 0"
    />
    <FeaturesSection :content="content.datapolicy" />
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
