<template>
  <q-btn flat color="primary" @click="() => props.redirectTo && props.redirectTo('/', props.index)">
    PÁGINA PRINCIPAL
  </q-btn>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    redirectTo: Function,
    index: Number,
  });
</script>