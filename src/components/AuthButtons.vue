<template>
  <div class="show-user-name" v-if="props.currentUser !== null">Bem-vindo, {{ props.currentUser?.app_metadata.name }}</div>
  <q-btn v-if="props.currentUser === null" auto-close label="Entrar" split class="bg-primary" @click="() => props.redirectTo && props.redirectTo('login', props.indexEntrar)" />
  <q-btn v-else color="primary" @click="logOut">SAIR</q-btn>
</template>

<style scoped>
  .show-user-name{
    margin-right: 10px;
    color: black;
  }

  @media screen and (max-width:480px) {
    .show-user-name{
      display: none;
    }
  }
</style>

<script setup lang="ts">
  import type { User } from '@supabase/supabase-js';
  import { useQuasar } from 'quasar';
import { supabase } from 'src/supabase/supabase';

  const $q = useQuasar();

  async function logOut(){
    const { error } = await supabase.auth.signOut();
    
    if(!error){
      props.redirectTo('/', 0);
    }
    else{
      $q.notify({
        position: "top",
        type: "negative",
        message: "Algo deu errado!",
        timeout: 1500,
      });
    }
  }

  const props = defineProps<{
    redirectTo: (type: string, index: number) => void;
    indexEntrar: number;
    indexConvidado: number;
    currentUser: User | null;
  }>();
</script>