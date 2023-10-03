<template>
  <form @submit.prevent>
    <div class="row g-3">
      <div class="col">
        <input
          type="text"
          :value="title"
          @input="changeTitle"
          name=""
          class="form-control"
          placeholder="제목으로 검색해주세요"
        />
      </div>
      <div class="col-3">
        <select
          :value="limit"
          @input="$emit('update:limit', $event.target.value)"
          class="form-select"
        >
          <option value="6">6개씩 보기</option>
          <option value="12">12개씩 보기</option>
          <option value="18">18개씩 보기</option>
        </select>
      </div>
    </div>
  </form>
</template>
<script setup>
defineProps({
  title: String,
  limit: Number,
});
const emit = defineEmits(['update:title', 'update:limit']);

// 검색시 지연효과
const changeTitle = event => {
  setTimeout(() => {
    emit('update:title', event.target.value);
  }, 500);
};
</script>
