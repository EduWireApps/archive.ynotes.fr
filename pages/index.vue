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
    <Faq :content="content.faq" />
    <div class="bg-red-500 text-white p-8">Link Help center</div>
    <div class="bg-red-500 text-white p-8">Link contact page</div>
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
    this.$store.commit("header/setTransparent", { t: true });
    this.$store.commit("header/setMarginTop", { t: false });
  },
  methods: {
    updateHeaderTransparency(isVisible, entry) {
      this.$store.commit("header/setTransparent", { t: isVisible });
    }
  }
};
</script>

<style></style>
