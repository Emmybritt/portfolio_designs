<template>
    <div class="grid grid-cols-12 gap-6 lg:px-48 bg-gradient-to-r dark:from-dark-500 dark:text-white dark:to-dark-700 from-green to-blue-400 px-5 sm:px-20 md:px-32 py-14">
        <div class="lg:col-span-3 shadow-custom-light dark:shadow-custom-dark text-center dark:bg-dark-500 col-span-12 bg-white rounded-2xl">
            <Sidebar />
        </div>
        <div class="lg:col-span-9 col-span-12 shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 bg-white rounded-2xl flex flex-col">
            <NavBar />
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import Sidebar from '../components/portfoliocomponent/Sidebar.vue'
import NavBar from '../components/portfoliocomponent/NavBar.vue'

</script>