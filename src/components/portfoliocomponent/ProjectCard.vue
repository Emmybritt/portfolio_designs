<template>
  <div class="font-source">
      <img @click="SetShowDetails" src="../../assets/icons/businessbackground.jpg" :alt="project.name" class="cursor-pointer">
      <p class="my-2 text-center">{{project.name}}</p>

      <div v-if="showDetail" class="grid md:grid-cols-2 absolute top-0 left-0 z-10 p-2 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100">
          <div>
              <img src="../../assets/icons/businessbackground.jpg" :alt="project.name" class="">
              <div class="flex justify-center my-4 space-x-3">
                  <a href="#" class="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                      <span class="lab la-github"></span>
                      <span>Github</span>
                  </a>
                  <a href="#" class="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                      <span class="las la-book"></span>
                      <span>Project</span>
                  </a>
              </div>
          </div>
          <div>
              <h2 class="mb-3 text-xl font-medium font-signika md:2xl">{{project.name}}</h2>
              <h2 class="mb-3 font-medium">{{project.description}}</h2>
              <div class="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                  <div v-for="(tag, i) in project.key_token" :key="i">
                  <span class="px-2 py-1 my-1  bg-gray-200 dark:bg-dark-200 rounded-sm">{{tag}}</span>
              </div>
              </div>
              
          </div>
          <button class="absolute top-3 right-3 rounded-full focus:outline-none bg-gray-200 dark:bg-dark-200" @click="SetShowDetails">
              <span class="las la-times"></span>
          </button>
      </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const showDetail = ref(false);
const props = defineProps({
    project: Object,
})


function SetShowDetails() {
    showDetail.value = !showDetail.value
}

</script>

<style>

</style>