<template>
  <q-btn flat color="primary" @click="() => props.redirectTo && props.redirectTo(props.currentUser !== null ? 'home' : '/', props.index)">
    PÁGINA PRINCIPAL
  </q-btn>
</template>

<script setup lang="ts">
  import type { User } from '@supabase/supabase-js';

  const props = defineProps<{
    redirectTo: (type: string, index: number) => void;
    index: number;
    currentUser: User | null;
  }>();
</script>