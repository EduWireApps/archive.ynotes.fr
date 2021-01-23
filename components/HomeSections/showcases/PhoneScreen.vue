<template>
  <div
    class="w-82 bg-gray-700 flex flex-col border-gray-900 rounded-r-xl phone shadow-xl"
    :class="`phone-${left ? 'left' : 'right'}`"
  >
    <slot />
  </div>
</template>

<script>
export default {
    props: {
        left: Boolean
    }
};
</script>

<style>
.phone {
  border-width: 40px 15px;
  border-radius: 25px;
  height: 500px;
}
.phone-left {
    transform: translateX(-15px);
}
.phone-right {
    transform: translateX(15px);
}
</style>
