<template>
  <div>
    <button @click="openPopup">팝업 열기</button>
    <div v-if="isPopupOpen" class="popup">
      <video ref="videoPlayer" autoplay loop>
        <source src="@/assets/movie.mp4" type="video/mp4" />
      </video>
      <button class="btn-close" @click="closePopup">X</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const isPopupOpen = ref(false);
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
.btn-close {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 1;
  color: #fff;
}
</style>
