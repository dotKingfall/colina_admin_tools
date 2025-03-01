<template>
  <q-page>
    <main>
      <div className="introduction text-center">
        <div className="stake-title">Estaca Maceió Brasil Colina</div>
        <div className='description'>Ferramentas Administrativas</div>
        <q-btn label="CALENDÁRIO" color="primary" @click="redirectTo('calendario', 2)"></q-btn>
      </div>
    </main>
  </q-page>
</template>

<style scoped lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4vh;
    background-color: $secondary;
  }

  .introduction{
    font-family: 'robotoCondensed';
    font-optical-sizing: auto;
  }

  .stake-title{
    color: $primary;
    font-size: 4.5rem;
    line-height: 1;
  }

  .description{
    color: $secondary_accent;
    font-size: 1.7rem;
    line-height: 1.5;
    padding-bottom: 20px;
  }

  .next-step{
    padding-left: 5vh;
    padding-right: 5vh;
  }

  @media screen and (max-width: 480px){
    .stake-title{
      font-size: 2rem;
    }

    .description{
      font-size: 1.5rem;
    }
  }
</style>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { usePageIndexStore } from 'src/stores/pageIndex-store';

  const router = useRouter();
  const pageIndexStore = usePageIndexStore();

  async function redirectTo(path: string, index: number){
    await router.push(path);
    pageIndexStore.setPageIndex(index);
  }
</script>