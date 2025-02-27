<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered>
      <q-toolbar class="bg-secondary">
        <q-btn
          class="text-primary navigation-mobile"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title shrink class="title-desktop q-pa-none">
          <q-btn flat color="primary" @click="() => redirectTo('/')">
            PÁGINA PRINCIPAL
          </q-btn>
        </q-toolbar-title>
        <q-separator vertical inset style="margin-right: 10px; margin-left: 10px;" class="bg-primary separator-desktop" />
        <div class="navigation-desktop">
          <q-btn class="text-primary" flat @click="() => redirectTo('indicacoes')">
            INDICAÇÕES
          </q-btn>
        </div>

        <q-toolbar-title class="title-mobile text-primary">
          ESTACA COLINA
        </q-toolbar-title>

        <AuthButtons />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <DrawerCards :redirectTo="redirectTo" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
  @import '../css/MainLayout.scss'
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthButtons from 'components/AuthButtons.vue'
import DrawerCards from 'src/components/DrawerCards.vue';

const leftDrawerOpen = ref(false);
const router = useRouter();

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

async function redirectTo(path: string){
  await router.push(path);
}

</script>