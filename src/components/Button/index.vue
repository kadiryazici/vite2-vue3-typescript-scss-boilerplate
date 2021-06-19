<script lang="ts" setup>
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
   text: {
      required: true,
      type: String as PropType<string>,
   },
});
</script>

<template>
   <button class="_button">
      <div class="text">{{ props.text }}</div>
   </button>
</template>
