<template>
  <div class="p-2 flex items-center space-x-4">
      <span class="las la-desktop text-3xl text-green-500"></span>
      <div>
          <h4 class="font-bold" v-html="service.title"></h4>
          <p v-html="service.about"></p>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
    service: Object,
})
</script>

<style>

</style>