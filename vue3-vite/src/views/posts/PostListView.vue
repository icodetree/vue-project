<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      :limit="params._limit"
      @update:limit="changeLimit"
    />
    <hr class="my-4" />

    <AppLoading v-if="loading" />
    <AppError v-else-if="error" :message="error.message" />

    <!-- 검색어에 결과값이 없을때 메시지 출력 -->
    <template v-else-if="!isExist">
      <p class="text-center py-5 text-muted">No Results</p>
    </template>

    <template v-else>
      <AppGrid :items="posts" col-class="col-12 col-md-6 col-lg-4">
        <template v-slot="{ item }">
          <PostItem
            :title="item.title"
            :content="item.content"
            :created-at="item.createdAt"
            @click="goPage(item.id)"
            @modal="openModal(item)"
            @preview="selectPreview(item.id)"
          ></PostItem>
        </template>
      </AppGrid>

      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col-4"></div>
      </div>

      <AppPagination
        :current-page="params._page"
        :page-count="pageCount"
        @page="page => (params._page = page)"
      />
    </template>

    <Teleport to="#modal">
      <PostModal
        v-model="show"
        :title="modalTitle"
        :content="modalContent"
        :createAt="modalCreateAt"
      />
    </Teleport>

    <template v-if="previewId">
      <hr class="my-5" />
      <AppCard>
        <PostDetailView :id="previewId"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>
<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';

import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';

import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();

// toRef
const previewId = ref(null);
const selectPreview = id => (previewId.value = id);

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 6,
  title_like: '',
});

// 마지막페이지에서 필터선택시 버그수정
const changeLimit = value => {
  params.value._limit = value;
  params.value._page = 1;
};

// composables
const {
  response,
  data: posts,
  error,
  loading,
} = useAxios('/posts', { params });

const isExist = computed(() => posts.value && posts.value.length > 0);

//pagination
const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);

// const fetchPosts = async () => {
//   try {
//     loading.value = true;
//     const { data, headers } = await getPosts(params.value);
//     posts.value = data;
//     totalCount.value = headers['x-total-count'];
//     console.log('headers: ', pageCount.value);
//   } catch (err) {
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// };
// watchEffect(fetchPosts);

// fetchPosts();
const goPage = id => router.push({ name: 'PostDetail', params: { id } });

// modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreateAt = ref('');

const openModal = ({ title, content, createAt }) => {
  show.value = true;
  modalTitle.value = title;
  modalContent.value = content;
  modalCreateAt.value = createAt;
};
</script>
