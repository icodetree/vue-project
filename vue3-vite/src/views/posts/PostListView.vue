<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <hr class="my-4" />
    <PosDetailView :id="2"></PosDetailView>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';

import PostItem from '@/components/posts/PostItem.vue';
import PosDetailView from '@/views/posts/PosDetailView.vue';

const router = useRouter;
const posts = ref([]);

const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();

const goPage = id => {
  // router.push(`/posts/${id}`);
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  });
};
</script>
