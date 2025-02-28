<template>
  <q-btn :class="cardClass" flat @click="() => props.redirectTo && props.redirectTo(props.path, props.index)">
    <q-icon :name="props.iconName" left color="primary" />
      {{ props.label }}
  </q-btn>
</template>

<style scoped lang="scss">
@import '../css/quasar.variables.scss';

  .drawer-links{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  
  .page-card{
    width: 100%;
    font-family: 'robotoCondensed';
    font-size: 1.5em;

    align-items: baseline;
  }

  .active-page{
    color: $primary;
  }

</style>

<script setup lang="ts">
  import { computed } from 'vue';
  import { usePageIndexStore } from 'src/stores/pageIndex-store';

  const pageIndexStore = usePageIndexStore();

  const props = defineProps({
    redirectTo: Function,
    index: Number,
    path: String,
    label: String,
    iconName: String,
  });

  const cardClass = computed(() => {
    return {
        'page-card': true,
        'active-page': pageIndexStore.currentPageIndex === props.index,
      };
  });
</script>