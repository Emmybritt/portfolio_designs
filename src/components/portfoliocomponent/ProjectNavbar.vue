<template>
  <div>
      <ul class="flex space-x-3 px-3 py-2 overflow-x-auto font-signika cursor-pointer">
          <li class="hover:text-green" @click="$emit('handlerFilterCategory', 'all')">All</li>
          <li class="hover:text-green" @click="$emit('handlerFilterCategory', 'vue')">Vue js</li>
          <li class="hover:text-green" @click="$emit('handlerFilterCategory', 'laravel')">Laravel</li>
          <li class="hover:text-green" @click="$emit('handlerFilterCategory', 'react-native')">React-native</li>
      </ul>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
// import {projects as projectDatas} from "./data"
const emit = defineEmits(['handlerFilterCategory']);




</script>

<style>

</style>