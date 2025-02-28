<template>
  <q-page>
    <div class="abc">
      indicações
    </div>
  </q-page>
</template>

<style scoped>
  .abc{
    font-size: large;
    font-family: 'robotoCondensed';
  }
</style>

<script lang="ts">
  import { useUserStore } from 'src/stores/user-store';

  const userStore = useUserStore();
  const user = userStore.user;

  console.log(user?.email);
</script>