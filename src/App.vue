<template>
   <router-view :key="route.fullPath"> </router-view>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style lang="scss">
html,
body,
#app {
   width: 100%;
   height: 100%;
   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   justify-content: center;
   background-color: vars.$bgColor; // CHECK vite.config.ts line 21
}

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
</style>
