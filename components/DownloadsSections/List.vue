<template>
<Container class="w-500 h-200 rounded bg-gray-300 text-center p-2 grid  auto-col-auto ">

    <div v-for="(e, index) in filterReleases()" :key="index" class=" flex-grow inline-flex align-middle justify-star mt-2 mb-2 text-left">
        <br>
        <div class="grid grid-flow-row auto-rows-max text-left flex-grow">
            <div class="text-left" v-html="e.name"></div>
            <div class="text-left text-lg text-gray-500" v-html="firstAsset(e).name + ' - ' +   new Date(firstAsset(e).updated_at).toLocaleDateString('fr-FR')"></div>
        </div>
         <a :href="e.html_url" target="_blank">
        <button class="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" v-bind:class="selected?'border-4 border-space-400':''">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" /></svg>
            <span>Détails</span>
        </button>
        </a>
        <a :href="firstAsset(e).browser_download_url" target="_blank">
        <button class="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" v-bind:class="selected?'border-4 border-space-400':''">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>
            <span>Télécharger</span>
        </button>
        </a>
    </div>
    <div v-if="filterReleases().length == 0" class="text-center">Aucun téléchargement disponible</div>
</Container>
</template>

<script>
export default {

    data() {
        return {
            releases: [],

            //find the first asset with the right suffix
            firstAsset: function (release) {
                return release.assets.find(element => element.name.includes(this.content.suffix))
            },
            //filter releases with assets with the right suffix (.xxx)
            filterReleases: function () {
                console.log((this.releases ?? []).filter((a) => a.assets.some((e) => {
                    e.name.includes(this.content.suffix)
                })));
                var suffix2 = this.content.suffix;
                return (this.releases ?? []).filter(function (item) {
                    const matchSuffix = (element) => element.name.includes(suffix2);
                    return item.assets.some(matchSuffix);
                })
            }
        }
    },
    //get the releases
    async created() {
        this.releases = await this.$axios.$get(
            "https://api.github.com/repos/EduWireApps/ynotes/releases"
        );
    },

    props: {
        content: Object,
    },

}
</script>

<style></style>
