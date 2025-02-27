<template>
  <q-list>
    <div class="drawer-title text-white bg-primary">PÁGINAS</div>
    <q-btn class="page-card" flat @click="() => props.redirectTo && props.redirectTo('/')">
      <q-icon name="ion-home" left color="primary" />
        INÍCIO
    </q-btn>
    <q-btn class="page-card" flat @click="() => props.redirectTo && props.redirectTo('indicacoes')">
      <q-icon name="ion-chatbubbles" left color="primary" />
        INDICAÇÕES
    </q-btn>
  </q-list>
</template>

<style scoped>
  .drawer-title{
    text-align: center;
    font-family: 'robotoCondensed';
    font-size: 2em;
    
    padding-top: 10px;
    padding-bottom: 5px;
  }

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

</style>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    redirectTo: Function
  });
</script>