import { ref } from 'vue';
const alerts = ref([]);

// composabls function
export function useAlert() {
  const vAlert = (message, type = 'error') => {
    alerts.value.push({ message, type });

    setTimeout(() => {
      alerts.value.shift();
    }, 2000);
  };
  const vSuccess = message => vAlert(message, 'sucess');
  return {
    alerts,
    vAlert,
    vSuccess,
  };
}
