<template>
    <div class="my-2 bg-gray-300 dark:bg-dark-200 rounded-full">
        <div :style="{'width':tool.level}" class="px-4 space-x-2 text-white py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600">
        <span class="h-4 w-4 rounded-full bg-gray-200"></span>
        <span>{{tool.name}}</span>
    </div>
    </div>
</template>

<script setup>
const props = defineProps({
    tool: Object,
});

</script>

<style>

</style>