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
    <div>Résumé</div>
    <div>Notes</div>
    <div>Agenda</div>
    <div>Stats</div>
    <div>Notifications</div>
    <div>Autre : devoirs, fichiers, messagerie</div>
    <Features :content="content.features" />
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
