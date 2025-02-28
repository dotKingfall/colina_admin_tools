<template>
  <q-btn :class="cardClass" flat @click="() => props.redirectTo && props.redirectTo(props.path, props.index)">
    {{ props.label }}
  </q-btn>
</template>

<style scoped lang="scss">
@import '../css/quasar.variables.scss';

  .page-tab{
    color: $primary;
    background-color: transparent;
  }

  .active-page{
    color: $secondary;
    background-color: $primary;
  }

</style>

<script setup lang="ts">
  import { computed } from 'vue';
  import { usePageIndexStore } from 'src/stores/pageIndex-store';
  import type { User } from '@supabase/supabase-js';

  const pageIndexStore = usePageIndexStore();

  const props = defineProps<{
    redirectTo: (type: string, index: number) => void;
    index: number;
    path: string;
    label: string;
    currentUser: User | null;

  }>();

  const cardClass = computed(() => {
    return {
        'page-tab': true,
        'active-page': pageIndexStore.currentPageIndex === props.index,
      };
  });
</script>