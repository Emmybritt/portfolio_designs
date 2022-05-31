<template>
  <div class="px-5 py-2 overflow-y-scroll" style="height:65vh">
      <ProjectNavbar @handlerFilterCategory="handlerFilterCategory" />
      <div class="grid grid-cols-12 gap-4 my-3 relative">
        <div class="col-span-12 bg-gray-200 dark:bg-dark-200 rounded-lg sm:col-span-6 p-2 lg:col-span-4" v-for="(project, i) in projects" :key="i">
          <ProjectCard :project="project" />
        </div>
      </div>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {projects} from '../../components/portfoliocomponent/data'
import ProjectCard from '../../components/portfoliocomponent/ProjectCard.vue'
import ProjectNavbar from '../../components/portfoliocomponent/ProjectNavbar.vue'

const projectDatas = ref(projects);
const active = ref("all")

function handlerFilterCategory(category){
  if(category === "all")
  {
    var projects = projectDatas;
    active.value = category
    return;
  }
  // const newArray = projectDatas.filter(project => project.category.includes(category));
  // projects = newArray;
  // active.value = category;
}

</script>

<style>

</style>