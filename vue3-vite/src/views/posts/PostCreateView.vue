<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      @submit.prevent="save"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">등록</button>
      </template></PostForm
    >
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';

const { vAlert, vSuccess } = useAlert();

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});

const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now(),
    });
    // router.push({ name: 'PostList' });

    vSuccess('등록이 완료되었습니다.');
  } catch (error) {
    console.error(error);
    vAlert(error.message);
  }
};

const goListPage = () => router.push({ name: 'PostList' });
</script>
