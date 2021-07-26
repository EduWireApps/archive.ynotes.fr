<template>
  <div>
    <div
      v-if="hasSuffixFiles"
      class="flex flex-col p-4 text-center bg-gray-200 rounded-md"
    >
      <div
        v-for="(release, index) in releases"
        :key="index"
        class="flex flex-col"
      >
        <div class="flex flex-row justify-between">
          <div class="flex flex-col items-start">
            <div class="text-sm leading-none text-gray-500">
              Publiée le
              {{ new Date(release.published_at).toLocaleDateString("fr-FR") }}
            </div>
            <div class="text-xl font-semibold text-gray-900">
              {{ release.name }}
            </div>
          </div>
          <a :href="release.html_url" target="_blank">
            <button
              class="inline-flex items-center px-4 py-2 space-x-2 font-bold text-gray-800 transition-colors bg-gray-300 rounded hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span>Voir sur Github</span>
            </button>
          </a>
        </div>
        <div class="grid gap-2 mt-2">
          <div v-for="(asset, i) in release.assets" :key="i">
            <a
              :href="asset.browser_download_url"
              class="inline-flex items-center px-4 py-2 space-x-4 font-mono text-gray-800 transition-colors bg-gray-300 bg-opacity-50 rounded hover:bg-gray-100 w-full"
              download
              ><svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg
              ><span>{{ asset.name }}</span></a
            >
          </div>
        </div>
        <div class="h-0.5 bg-gray-300 my-6"></div>
      </div>
    </div>
    <div v-else class="text-xl text-center">
      Aucun téléchargement disponible
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    suffix() {
      return this.content.suffix;
    },
    hasSuffixFiles() {
      let files = [];
      this.releases.forEach(e => {
        files = files.concat(e.assets);
      });
      return files.some(e => e.name.includes(this.suffix));
    }
  },
  props: {
    content: Object,
    releases: Array
  }
};
</script>

<style></style>
