<template>
  <q-page class="bg-secondary">
    <div class="form-outline q-mx-auto">
      <div class="page-title text-primary">ENTRAR</div>
      <q-form @submit.prevent="handleLogin">
        <q-input
          v-model= "email"
          outlined
          label="E-mail"
          stack-label
          placeholder="Insira o e-mail cadastrado"
          type="email"
          class="q-mb-md"
        />
      
        <q-input
              v-model= "password"
              outlined
              label="Senha"
              stack-label
              placeholder="Insira sua senha"
              :type= 'passwordFieldType'
              class="q-mb-md flex-grow-1"
              clearable
              clear-icon= 'ion-close'
              lazy-rules
              :rules="[val => val !== null && val !== '' || 'O campo da senha não pode estar vazio']"
            >
            <template v-slot:append>
              <q-btn flat @click="togglePasswordVisibility" :icon="passwordFieldType === 'password' ? 'ion-eye' : 'ion-eye-off'" color="primary" />
            </template>
          </q-input>

        <q-btn v-if="!isLoading" label="ENTRAR" type="submit" color="primary" class="submit-button" />
        <q-spinner-oval v-else color="primary" size="2em" style="width: 100%;" />
      </q-form>
    </div>
  </q-page>
</template>

<style scoped>

  .form-outline{
    padding-top: 10vh;
    max-width: 500px;
  }

  .page-title{
    text-align: center;
    font-size: 2rem;
    font-family: 'robotoCondensed';
    margin-bottom: 10px;
  }

  .submit-button{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (max-width:  480px){
    .form-outline{
      max-width: 90vw;
    }
  }
</style>

<script setup lang="ts">
  import { useQuasar } from 'quasar';
  import { ref } from 'vue';
  import { supabase } from '../supabase/supabase';

  const $q = useQuasar();
  const email = ref();
  const password = ref();
  const passwordFieldType = ref<'password' | 'text'>('password');
  const isLoading = ref(false);

  function togglePasswordVisibility(){
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
  }

  function showToast(code: number){
    if(code === 400){
      $q.notify({
        position: "top",
        type: "negative",
        message: "E-mail ou senha incorretos",
        timeout: 1500,
      });
    }
    else if(code === 200){
      $q.notify({
        position: "top",
        type: "positive",
        message: "Bem-vindo!",
        timeout: 1500,
      });
    }
    else{
      $q.notify({
        position: "top",
        type: "negative",
        message: "Um erro desconhecido ocorreu",
        timeout: 1500,
      });
    }
  }

  const handleLogin = async () => {
    try{
      isLoading.value = true;
      const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      if(error) throw error
      console.log("Welcome!");
      showToast(200);
    }
    catch(e){
      if(e instanceof Error){
        console.log(e.message);
        showToast(400);
      }
      else{
        console.log('An unkown error occoured.') ;
        showToast(-1);
      }
    }
    finally{
      isLoading.value = false;
    }
  }

</script>