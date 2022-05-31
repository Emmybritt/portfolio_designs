<template>
    <div class="flex flex-col font-source flex-grow px-6 pt-1">
        <h5 class="font-source font-medium">I am currently pursuing B Tech Degree(Final Year) in Computer Science Engineering from Academy ofTechnology I have 4+
             years of experience in web development and 2 years + in mobile app development using react native</h5>
             <div class="p-4 my-5 bg-gray-400 dark:bg-dark-100 flex-grow" style="margin-left: -1.5rem; margin-right: -1.5rem">
                 <h4 class="my-3 font-bold text-xl font-signika tracking-wide">What I can do</h4>
                 <div class="grid lg:grid-cols-2 gap-6">
                     <div class="md:col-span-1 col-span-2 dark:bg-dark-200 bg-gray-200 rounded-lg" v-for="(service, i) in services" :key="i">
                         <ServiceCard :service="service"/>
                     </div>
                 </div>
             </div>
    </div>
</template>

<script setup>
import {services} from '../../components/portfoliocomponent/data'
import ServiceCard from '../../components/portfoliocomponent/ServiceCard.vue'
</script>