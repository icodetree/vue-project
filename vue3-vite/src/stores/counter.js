import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  // 객체를 반환하는 함수
  state: () => ({
    counter: 1,
  }),
  // 컴포넌트에서 computed를 사용할때 state에 어떤값을 계산해서 반환하는 기능으로 사용
  getters: {
    doubleCount: state => state.counter * 2,
  },
  // store를 변경할수 있는 메서드를 정리
  actions: {
    increment() {
      this.counter++;
    },
  },
});
