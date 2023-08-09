<template>
  <monaco-editor v-model="code" :options="editorOptions"></monaco-editor>
</template>

<script>
import { ref } from 'vue';
import MonacoEditor from '@guolao/vue-monaco-editor';

export default {
  components: {
    MonacoEditor,
  },

  setup() {
    const code = ref(
      `import ButtonFullArea from '@/components/libs/button/ButtonFullArea.vue';`,
    );
    const editorOptions = {
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true,
      formatOnType: true,
      formatOnPaste: true,
    };

    console.log(code.value);

    return {
      code,
      editorOptions,
    };
  },
};
</script>
