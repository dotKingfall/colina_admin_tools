<template>
  <q-page class="bg-secondary">
    <main>
      <div v-if="finishedLoading" class="calendar-outline q-mx-auto">
        <q-list>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Janeiro">
            <q-list>
              <div>
                <CalendarItem></CalendarItem>
              </div>
            </q-list>
          </q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Fevereiro"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Março"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Abril"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Maio"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Junho"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Julho"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Agosto"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Setembro"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Outubro"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Novembro"></q-expansion-item>
          <q-expansion-item class="expansion-item" expand-icon-class="text-secondary" expand-separator label="Dezembro"></q-expansion-item>
        </q-list>
      </div>
      <div v-else>
        <LoadingSpinner />
      </div>
    </main>
  </q-page>
</template>

<style scoped lang="scss">
  .calendar-outline{
    width: 80%;
    padding-top: 20px;
  }
  .expansion-item{
    color: $secondary;
    background-color: $primary;

    font-family: 'robotoCondensed';
    font-size: x-large;

    border-radius: 15px;
    margin-bottom: 10px;
  }

  @media screen and (max-width:480px) {
    .calendar-outline{
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
    }

    .expansion-item{
      font-size: 1.3rem;
    }
  }
</style>

<script setup lang="ts">
  import CalendarItem from 'src/components/CalendarPage/CalendarItem.vue';
  import LoadingSpinner from 'src/components/LoadingSpinner.vue';
  import { supabase } from 'src/supabase/supabase.js';
  import { onMounted, ref } from 'vue';
  import { useQuasar } from 'quasar'

  const finishedLoading = ref(false); //TODO CHANGE
  const $q = useQuasar();

  onMounted(async () => {
    await getYearEvents();
  });

  async function getYearEvents(){
    try{
      const { data, error, status } = await supabase
      .schema('calendario').from('eventos').select();

      if(error && status !== 406) throw error;
      if(data){
        console.log(data);
      }
    }
    catch(e){
      $q.notify({
        position: "top",
        type: "negative",
        message: "Algo deu errado ao carregar os eventos",
        timeout: 1500,
      });
      console.log(e);
    }
    finally{
      finishedLoading.value = true;
    }
  }
</script>