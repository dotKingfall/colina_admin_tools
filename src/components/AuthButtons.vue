<template>
  <q-btn-group>
    <q-btn-dropdown auto-close label="Entrar" split class="bg-primary" @click="() => props.redirectTo && props.redirectTo('login', props.indexEntrar)">
      <q-item clickable @click="() => props.redirectTo && props.redirectTo('convidado', props.indexConvidado)">
        <div class="q-mx-auto flex flex-center">Convidado</div>
      </q-item>
    </q-btn-dropdown>
  </q-btn-group>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    redirectTo: Function,
    indexEntrar: Number,
    indexConvidado: Number,
  });
</script>