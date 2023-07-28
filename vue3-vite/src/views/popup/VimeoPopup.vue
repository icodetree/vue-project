<template>
  <div>
    <button @click="openPopup">팝업 열기</button>
    <div v-if="isPopupOpen" class="popup">
      <div class="video-wrapper">
        <iframe
          title="vimeo-player"
          :src="vimeoVideoUrl"
          allow="autoplay"
          fullscreen
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <!-- <video ref="vimeoVideoPlayer" autoplay loop>
        <source src="@/assets/movie.mp4" type="video/mp4" />
      </video> -->

      <button class="btn-close" @click="closePopup">X</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const isPopupOpen = ref(false);
    const vimeoVideoUrl = ref(
      'https://player.vimeo.com/video/771851041?h=278fc31e7a&badge=0&autopause=0&player_id=0&app_id=58479&background=1',
    );

    const openPopup = () => {
      isPopupOpen.value = true;
    };

    const closePopup = () => {
      isPopupOpen.value = false;
      // vimeoVideoPlayer.pause();
    };

    onMounted(() => {});

    onBeforeUnmount(() => {
      // vimeoVideoPlayer.pause();
    });

    return {
      isPopupOpen,
      openPopup,
      vimeoVideoUrl,
      closePopup,
    };
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup video {
  width: 100%;
  height: 100vh;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  /* padding-bottom: 56.25%; */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.btn-close {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 1;
  color: #fff;
}
</style>
