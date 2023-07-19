<template>
  <div>
    <button @click="openPopup">팝업 열기</button>
    <div v-if="isPopupOpen" class="popup">
      <div class="video-wrapper">
        <iframe
          title="vimeo-player"
          :src="videoUrl"
          fullscreen
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <!-- <video ref="videoPlayer" autoplay loop>
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
    const videoUrl = ref(
      'https://www.youtube.com/embed/czKp1dg95bY?loop=1&autoplay=1&playlist=czKp1dg95bY&controls=0&mute=1',
    );

    let videoPlayer;

    const openPopup = () => {
      isPopupOpen.value = true;
    };

    const closePopup = () => {
      isPopupOpen.value = false;
      videoPlayer.pause();
    };

    onMounted(() => {
      videoPlayer = document.querySelector('.popup video');
    });

    onBeforeUnmount(() => {
      videoPlayer.pause();
    });

    return {
      isPopupOpen,
      openPopup,
      videoUrl,
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
