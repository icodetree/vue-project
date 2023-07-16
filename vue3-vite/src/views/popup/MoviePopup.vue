<template>
  <div>
    <button @click="openPopup">Open Popup</button>
    <div v-if="showPopup" class="popup">
      <video ref="videoRef" :src="videoSrc" @ended="playVideo"></video>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showPopup = ref(false);
    const videoSrc = ref('path/to/video.mp4');
    const videoRef = ref(null);

    const openPopup = () => {
      showPopup.value = true;
      playVideo();
    };

    const playVideo = () => {
      videoRef.value.play();
    };

    return {
      showPopup,
      videoSrc,
      videoRef,
      openPopup,
      playVideo,
    };
  },
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
