<template>
  <div class="px-6 py-2 font-source">
    <!-- Education & experience-->
    <div class="grid gap-6 md:grid-cols-2">
      <div>
        <h5 class="my-3 text-2xl font-bold">Education</h5>
        <div>
          <h5 class="my-2 text-xl font-bold">Computer Science Engineering</h5>
          <p class="font-semibold">Academy of Technology(2017 - 2021)</p>
          <p>I am currently pursuing B.tech in Computer science Engineering from Academy of Technology</p>
        </div>
      </div>
      <div>
        <h5 class="my-3 text-2xl font-bold">Experience</h5>
        <div>
          <h5 class="my-2 text-xl font-bold">Software Engineer jr.</h5>
          <p class="font-semibold">TCS (2021 - on)</p>
          <p>I don't know why i am doing this job</p>
        </div>
      </div>
    </div>
    <!-- Language -->
    <div class="grid gap-6 md:grid-cols-2">
      <div>
        <h5 class="my-3 text-2xl font-bold">Languages & Frameworks</h5>
        <div class="my-2">
          <div v-for="(skill, i) in skills" :key="i">
            <Bar :skill="skill" />
          </div>
        </div>
      </div>
      <div>
        <h5 class="my-3 text-2xl font-bold">Tools & Softwares</h5>
        <div class="my-2">
          <div v-for="(tool, i) in tools" :key="i">
            <Tool :tool="tool" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {skills} from '../../components/portfoliocomponent/data'
import { tools} from '../../components/portfoliocomponent/data'
import Bar from '../../components/portfoliocomponent/Bar.vue'
import Tool from '../../components/portfoliocomponent/Tool.vue'

</script>

<style>

</style>