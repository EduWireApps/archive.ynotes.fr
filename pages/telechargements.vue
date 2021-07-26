<template>
  <div class="flex flex-col">
    <PageHeader :title="content.title" :subtitle="content.description" />
    <div
      class="grid grid-cols-2 md:grid-flow-col gap-5 mx-auto mt-5"
    >
      <DownloadsSectionsPlatformChoice
        v-for="(e, index) in infos"
        :key="index"
        v-on:onClicked="() => (selectedIndex = index)"
        :content="e"
        :selected="selectedIndex === index"
      />
    </div>
    <DownloadsSectionsList
      :content="infos[selectedIndex]"
      :releases="releases"
      class="mx-5 md:mx-20 mt-5"
    />
    <span class="mt-5 mb-20 text-sm text-center text-gray-500"
      >Nous pouvons compter le nombre de téléchargements à des fins
      statistiques. Aucune donnée personnelle n'est collectée.
    </span>
  </div>
</template>

<script>
import infos from "@/assets/content/downloads.json";

export default {
  data() {
    return {
      selectedIndex: 0,
      infos: infos.platforms,
      content: infos
    };
  },
  async asyncData({ $axios }) {
    const releases = await $axios.$get(
      "https://api.github.com/repos/EduWireApps/ynotes/releases"
    );
    console.log(releases);
    return { releases };
  }
};
</script>
