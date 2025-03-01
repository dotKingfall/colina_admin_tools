<template>
  <router-view />
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import { supabase } from 'src/supabase/supabase';
  import { useRouter } from 'vue-router';
  import { usePageIndexStore } from 'src/stores/pageIndex-store';
  import { useUserStore } from 'src/stores/user-store';

  const pageIndexStore = usePageIndexStore();
  const userStore = useUserStore();
  const session = ref()
  const router = useRouter();

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    supabase.auth.getSession().then(({ data }) => {
      session.value = data.session;
      userStore.setUser(data.session?.user || null);
    })

    supabase.auth.onAuthStateChange((_, _session) => {
      session.value = _session;
      userStore.setUser(_session?.user || null);
    })
  });

  watch(session, async (existingSession) => {
    if(existingSession){
      await router.push('home');
      pageIndexStore.setPageIndex(0);
    }
  })

</script>
