<template>
  <div>
    <HomeSectionsHero :content="content.hero" />
    <HomeSectionsTrailer />
    <HomeSectionsWarning :content="content.warning" />
    <HomeSectionsSectionsFeaturesSection :content="content.project" />
    <HomeSectionsSectionsFeaturesSection :content="content.howitworks" />
    <HomeSectionsSectionsFeatureSection
      v-for="(e, index) in content.features"
      :key="index"
      :content="e"
      :left="index % 2 === 0"
    />
    <HomeSectionsSectionsFeaturesSection :content="content.datapolicy" />
    <HomeSectionsTimeline :content="content.timeline" />
    <HomeSectionsContributors :content="content.contributors" />
    <HomeSectionsRecruitement :content="content.recruitement" />
    <HomeSectionsContact :content="content.contact" class="pb-48" />
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
