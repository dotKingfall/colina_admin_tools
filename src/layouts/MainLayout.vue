const mainPath = '/';

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
          <MainMenu :redirectTo="redirectTo" :index=0 />
        </q-toolbar-title>
        <q-separator vertical inset style="margin-right: 10px; margin-left: 10px;" class="bg-primary separator-desktop" />
        <div class="navigation-desktop" v-for="(component, index) in components_desktop" :key="index">
          <component :is="component.name" v-bind="component.props" />
        </div>

        <q-toolbar-title class="title-mobile text-primary">
          ESTACA COLINA
        </q-toolbar-title>

        <AuthButtons :redirectTo="redirectTo" :indexEntrar=1 :indexConvidado=2 />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
    <q-list>
      <div class="drawer-title text-white bg-primary">PÁGINAS</div>
      <div v-for="(component, index) in components_mobile" :key="index">
        <component :is="component.name" v-bind="component.props" />
      </div>
    </q-list>
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
import DrawerCard from 'src/components/DrawerCard.vue';
import MainMenu from 'src/components/MainMenu.vue';
import BarCard from 'src/components/BarCard.vue'
import { usePageIndexStore } from 'src/stores/pageIndex-store';

const leftDrawerOpen = ref(false);
const router = useRouter();
const pageIndexStore = usePageIndexStore();

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

async function redirectTo(path: string, index: number){
  await router.push(path);
  pageIndexStore.setPageIndex(index);
  console.log(pageIndexStore.currentPageIndex)
}

  const components_mobile = [
    { name: DrawerCard, props: { redirectTo, label: 'INÍCIO', index: 0, path: '/', iconName: 'ion-home' } },
    { name: DrawerCard, props: { redirectTo, label: 'INDICAÇÕES', index: 3, path: 'indicacoes', iconName: 'ion-chatbubbles' } },
  ];

  const components_desktop = [
    { name: BarCard, props: { redirectTo, label: 'INDICAÇÕES', index: 3, path: 'indicacoes', } },
  ];

</script>