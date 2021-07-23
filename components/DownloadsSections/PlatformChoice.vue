<template>
<Container>
    <Container v-on:click.native="callback" class="inline-flex cursor-pointer items-center flex-nowrap rounded bg-gray-300 p-5" v-bind:class="selected?'border-4 border-space-400':''">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path :d="content.icon" /></svg>
        <div class="text-xl font-medium leading-6 text-gray-900" v-html="content.name"></div>
    </Container>
</Container>
</template>

<script>
export default {

    data() {
        return {}
    },

    props: {
        content: Object,
        selected: Boolean,
        callback: Function
    },

}
</script>

<style></style>
