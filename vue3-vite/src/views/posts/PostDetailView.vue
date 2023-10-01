<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="error" :message="error.message" />

  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
    </p>
    <hr class="my-4" />
    <div class="row">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
    <!-- <p>params : {{ $route.params }}</p>
    <p>query : {{ $route.query.searchText }}</p>
    <p>hash : {{ $route.hash }}</p> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';

const props = defineProps({
  id: [String, Number],
});

const router = useRouter();
// const id = route.params.id;
/**
 * ref
 * 장점 : 객체할당 가능, 일관성 유지
 * 단점 : form.vlaue.title, form.value.content
 *
 * reactive
 * 단점 : 객체 할당 불가능
 * 장점 : form.title, form.content
 * **/

const post = ref({
  title: null,
  content: null,
  createdAt: null,
});

const error = ref(null);
const loading = ref(false);

const fetchPost = async () => {
  try {
    loading.value = true;
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};
fetchPost();

// 삭제
const remove = async () => {
  try {
    if (confirm('삭제하시겠습니까?') === false) {
      return;
    }
    await deletePost(props.id);
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } });
</script>
