<template>
  <div>
    <h2>About View</h2>
    <p>{{ route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">
      Home으로 이동
    </button>

    <h2>Store</h2>
    <p>counter : {{ counter }}</p>
    <p>doubleCounter : {{ doubleCount }}</p>
    <button @click="increment()">Click!</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();

const store = useCounterStore();

// storeToRefs : 반응성을 유지한채 구조분해 문법을 사용할수 있다.
const { counter, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>
