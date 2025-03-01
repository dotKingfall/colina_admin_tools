<template>
  <q-page>
    <main>
      <div className="introduction text-center">
        <div className="stake-title">Estaca Maceió Brasil Colina</div>
        <div className='description'>Ferramentas Administrativas</div>
        <div className='text-secondary_accent'>Para continuar, entre com seu usuário ou use o acesso de convidado!</div>
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