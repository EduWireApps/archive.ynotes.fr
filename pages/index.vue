<template>
  <div>
    <Hero
      v-observe-visibility="updateHeaderTransparency"
      :content="content.hero"
    />
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
  },
  mounted() {
    this.$store.commit("header/settopStyle", { t: true });
    this.$store.commit("header/setMarginTop", { m: false });
  },
  methods: {
    updateHeaderTransparency(isVisible, entry) {
      this.$store.commit("header/settopStyle", { t: isVisible });
    }
  }
};
</script>

<style></style>
