<template>
  <hr class="my-4" />
  <div class="row g-3">
    <div v-for="(item, index) in items" :key="index" class="col-4">
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: String,
    required: true,
  },
});
</script>
