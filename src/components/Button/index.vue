<script lang="ts" setup>
import type { PropType } from 'vue';

// defineProps, defineEmits, defineExpose, withDefaults is globally available in vue 3 after release 3.1.3
const props = defineProps({
   text: {
      required: true,
      type: String as PropType<string>
   }
});
</script>

<template>
   <button class="_button">
      <div class="text">{{ props.text }}</div>
   </button>
</template>
