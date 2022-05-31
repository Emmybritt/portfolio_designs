<template>
  <div class="flex justify-between px-5 py-3 my-3 font-source">
       <router-link active-class="font-bold text-green-500 border-green-500 md:text-2xl text-xl border-b-4" :to="{name: 'About'}">About</router-link>
       <div class="flex  space-x-5 text-red-400 text-lg">
           <router-link active-class="font-bold text-green-500 border-green-500 md:text-2xl text-xl border-b-4" class="hover:text-green-500" :to="{name: 'Projects'}">Projects</router-link>
           <router-link active-class="font-bold text-green-500 border-green-500 md:text-2xl text-xl border-b-4" class="hover:text-green-500" :to="{name: 'Resume'}">Resume</router-link>
       </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const activeItem = ref('');
</script>

<style>

</style>