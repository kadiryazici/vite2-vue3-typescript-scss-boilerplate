<script lang="ts" setup>
import VButton from '/src/components/Button/index.vue';

/**
 * you canuse  import { ref } from 'vue'
 * and then
 * const count = ref(0);
 * but I used ref sugar here
 *
 * CHECK VITE.CONFIG.TS
 */
ref: count = 0; // ref sugar
</script>

<template>
   <div class="_home">
      <VButton @click="count++" :text="`Clicked ${count} times`"></VButton>
   </div>
</template>

<style lang="scss" scoped>
._home {
   ._nav,
   ._buttons {
      text-align: center;
   }

   ._content {
      height: 100%;
   }

   ._buttons {
      gap: 100px;
   }
}
</style>
