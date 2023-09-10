<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ content }}</p>
    <p class="text-muted">{{ createdAt }}</p>
    <template #footer>
      <i class="bi bi-emoji-sunglasses"></i>
    </template>
  </AppCard>
</template>
<script setup>
import AppCard from '@/components/AppCard.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});
</script>
