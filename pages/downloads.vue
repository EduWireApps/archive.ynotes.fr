<template>

  <div class="flex flex-col">
    <PageHeader :title="content.title" :subtitle="content.description" />
    <div class="grid grid-flow-col auto-cols-max justify-center mt-5">
    <DownloadsSectionsPlatformChoice v-for="(e , index) in Object.values(infos)" :key="index"  :callback="() => selectedIndex = index" :content=e :selected="selectedIndex==index"/>
    </div>
    <DownloadsSectionsList :content=Object.values(infos)[selectedIndex] class="mt-5 w-2/3" :suffix=Object.values(infos)[selectedIndex].suffix />
    <span class="mt-5 text-center text-sm text-gray-500">Nous pouvons compter le nombre de téléchargements à des fins statistiques. Aucune donnée personnelle n'est collectée.</span>
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
 methods: { 
   
 },
  async asyncData({ $content, params }) {
    
  }
};
</script>

<style>
.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  @apply text-left;
}
</style>
