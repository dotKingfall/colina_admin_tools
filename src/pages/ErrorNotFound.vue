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
        label="PÁGINA PRINCIPAL"
        no-caps
        @click="redirectToHome"
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
  import { usePageIndexStore } from 'src/stores/pageIndex-store';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const pageIndexStore = usePageIndexStore();

  async function redirectToHome(){
    await router.push('/');
    pageIndexStore.setPageIndex(0);
  }
</script>
