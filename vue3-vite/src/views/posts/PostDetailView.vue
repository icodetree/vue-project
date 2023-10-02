<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="error" :message="error.message" />

  <div v-else>
    <h2>{{ post.title }}</h2>

    <!-- toRef 예시를 위한 코드 -->
    <p>id : {{ props.id }}, isOdd : {{ isOdd }}</p>

    <p>{{ post.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
    </p>
    <hr class="my-4" />

    <AppError v-if="removeError" :message="removeError.message" />

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
        <!-- removeLoading -->
        <button
          class="btn btn-outline-danger"
          @click="remove"
          :disabled="removeLoading"
        >
          <template v-if="removeLoading">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else> 삭제 </template>
        </button>
      </div>
    </div>
    <!-- <p>params : {{ $route.params }}</p>
    <p>query : {{ $route.query.searchText }}</p>
    <p>hash : {{ $route.hash }}</p> -->
  </div>
</template>

<script setup>
import { toRef, toRefs } from 'vue';
import { useRouter } from 'vue-router';
// import { deletePost } from '@/api/posts';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/hooks/useAxios';
import { computed } from 'vue';
import { useNumber } from '@/composables/number';

// toRef 와 toRefs 의 사용방법
// const idRef = toRef(props, 'id');
const { id: idRef } = toRefs(props);
const { isOdd } = useNumber(idRef);

const { vAlert, vSuccess } = useAlert();
const url = computed(() => `/posts/${props.id}`);
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

// const post = ref({
//   title: null,
//   content: null,
//   createdAt: null,
// });

// const error = ref(null);
// const loading = ref(false);

const { data: post, error, loading } = useAxios(url);

// const fetchPost = async () => {
//   try {
//     loading.value = true;
//     const { data } = await getPostById(props.id);
//     setPost(data);
//   } catch (err) {
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// };
// const setPost = ({ title, content, createdAt }) => {
//   post.value.title = title;
//   post.value.content = content;
//   post.value.createdAt = createdAt;
// };
// fetchPost();

const {
  error: removeError,
  loading: removeLoading,
  execute,
} = useAxios(
  `/posts/${props.id}`,
  { method: 'delete' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('삭제가 완료되었습니다.');
      router.push({ name: 'PostList' });
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);

// 삭제
const remove = async () => {
  if (confirm('삭제하시겠습니까?') === false) {
    return;
  }
  execute();
};

// const removeError = ref(null);
// const removeLoading = ref(false);

// const remove = async () => {
//   try {
//     if (confirm('삭제하시겠습니까?') === false) {
//       return;
//     }
//     execute()
//     removeLoading.value = true;
//     await deletePost(props.id);
//     router.push({ name: 'PostList' });
//   } catch (err) {
//     removeError.value = err;
//   } finally {
//     removeLoading.value = false;
//   }
// };

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } });
</script>
