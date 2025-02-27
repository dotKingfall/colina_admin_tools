<template>
  <q-btn-group>
    <q-btn-dropdown auto-close label="Entrar" split class="bg-primary" @click="redirectLoginPage">
      <q-item clickable>
        <div class="q-mx-auto flex flex-center">Convidado</div>
      </q-item>
    </q-btn-dropdown>
  </q-btn-group>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();

  async function redirectLoginPage(){
    await router.push('login');
  }
</script>