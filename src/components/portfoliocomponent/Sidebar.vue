<template>
<div class="font-source">
    <img src="../../assets/mypics.jpg" class="w-32 h-32 mx-auto rounded-full" alt="">
    <h3 class="my-4 text-3xl font-bold font-signika tracking-wider">
        <span class="text-green">Emmy</span>
        britt
    </h3>
    <p class="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Full stack developer</p>
    <a download="name" class="px-2 flex items-center justify-center py-1 my-3 dark:bg-dark-200 bg-gray-200 rounded-full" ><i class="las la-download"></i> Download Resume</a>
    <div class="flex justify-around my-5 text-green-500 mx-auto w-9/12 md:w-full">
        <a href=""><span class="text-3xl cursor-pointer lab la-youtube"></span></a>
        <a href=""><span class="text-3xl cursor-pointer lab la-github"></span></a>
        <a href=""><span class="text-3xl cursor-pointer lab la-linkedin"></span></a>
    </div>
    <div class="my-5 py-4 dark:bg-dark-200 bg-gray-200" style="margin-left:-1rem, margin-right:-1rem">
        <div class="flex items-center justify-center space-x-2">
            <span class="las la-map-marker font-extrabold"></span>
            <span>Lagos Nigeria</span>
        </div>
            <!-- <span class="lab la-phone"></span> -->
            <p class="my-2">beritogwu@gmail.com</p>
            <p class="my-2 text-xs">+234701658973/+2348167566746</p>
    </div>
    <button onclick="window.open('mailto:beritogwu@gmail.com')" class="bg-gradient-to-r focus:outline-none from-green to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white">Email Me</button>
    <button @click="toggleDark" class="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white">Toggle Theme</button>
</div>
</template>

<script setup>
import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark);

</script>

<style>

</style>