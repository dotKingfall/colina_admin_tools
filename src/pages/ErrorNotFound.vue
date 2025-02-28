<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-center not-found-title">
        PÁGINA NÃO EXISTE.
      </div>
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="PÁGINA PRINCIPAL"
        no-caps
      />
    </div>
  </div>
</template>

<style>
  .not-found-title{
    font-size: 10vh;
    font-family: 'robotoCondensed';
  }

  @media screen and (max-width: 480px){
    .not-found-title{
      font-size: 10vw;
    }
  }
</style>

<script setup lang="ts">
//
</script>
