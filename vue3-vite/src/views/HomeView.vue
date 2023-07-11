<template>
  <h1>Home Page</h1>
  <p>{{ $route.name }}</p>

  <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goAboutPage = () => {
  router.push('/about');
};
</script>
