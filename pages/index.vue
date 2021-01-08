<template>
  <div>
    <Hero
      v-observe-visibility="updateHeaderTransparency"
      :content="content.hero"
    />
    <Warning :content="content.warning" />
    <Project id="projet" :content="content.project" />
    <HowItWorks :content="content.howitworks"/>
    <Features id="fonctionnalites" :content="content.features" />
    <div class="bg-red-500 text-white p-8">
      Comment nous <i>n'exploitons pas</i> vos données
    </div>
    <div class="bg-red-500 text-white p-8">Contributeurs</div>
    <div class="bg-red-500 text-white p-8">Besoin de monde</div>
    <div class="bg-red-500 text-white p-8">Link FAQ</div>
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
