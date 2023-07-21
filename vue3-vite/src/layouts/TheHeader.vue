<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/youtube"
                >youtube</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/vimeo"
                >vimeo</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/posts"
                >게시글</RouterLink
              >
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-outline-light" type="button" @click="goPage">
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = () => {
  router.push({
    name: 'PostCreate',
  });
};
</script>
