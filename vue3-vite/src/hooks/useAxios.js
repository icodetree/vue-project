import axios from 'axios';
import { ref, unref, watchEffect, isRef } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const defaultConfig = {
  method: 'get',
};

const defaultOptions = {
  immediate: true,
};

export const useAxios = (url, config = {}, options = {}) => {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const response = ref(null);

  const { onSuccess, onError, immediate } = { ...defaultOptions, ...options };

  // 랩핑을 풀어주기위함
  const { params } = config;

  // 반응형로직을 관찰하는 함수
  const execute = body => {
    data.value = null;
    error.value = null;
    loading.value = true;
    axios(url, {
      ...defaultConfig,
      ...config,
      params: unref(params), // 랩핑을 풀어주기위함

      data: typeof body === 'object' ? body : {},
    })
      .then(res => {
        response.value = res;
        data.value = res.data;

        if (onSuccess) {
          onSuccess(res);
        }
      })
      .catch(err => {
        error.value = err;
        if (onError) {
          onError(err);
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };

  if (isRef(params)) {
    // 반응형로직을 관찰하는 함수
    watchEffect(execute);
  } else {
    if (immediate) {
      execute();
    }
  }

  return {
    response,
    data,
    error,
    loading,
    execute,
  };
};
