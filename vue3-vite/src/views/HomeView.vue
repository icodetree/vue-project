<template>
  <h1>Home Page</h1>
  <p>{{ $route.name }}</p>

  <button class="btn btn-primary" @click="goAboutPage">About</button>

  <hr class="my-4" />
  <div class="row g-3">
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>

  <hr class="my-4" />
  <h2>{{ person.name }}</h2>
  <button class="btn btn-primary" @click="person.say">click person</button>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
  },
};
</script>

<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const router = useRouter();

const goAboutPage = () => {
  router.push('/about');
};

const items = ref(['사과', '배', '딸기', '포도', '수박']);

const person = inject('person');
console.log('person.name', person.name);
</script>
