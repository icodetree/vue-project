import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
  // 객체를 반환하는 함수
  state: () => ({
    alerts: [],
  }),
  // store를 변경할수 있는 메서드를 정리
  actions: {
    vAlert(message, type = 'error') {
      this.alerts.push({ message, type });

      setTimeout(() => {
        this.alerts.shift();
      }, 2000);
    },
    vSuccess(message) {
      this.vAlert(message, 'sucess');
    },
  },
});
