<template>
  <monaco-editor v-model:value="code" :options="editorOptions"></monaco-editor>
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
      `export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  })
}';`,
    );
    const editorOptions = {
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true,
      formatOnType: true,
      formatOnPaste: true,
      readOnly: true,
      tabFocusMode: true,
      minimap: {
        enabled: false, // 우측 미리보기 비활성화
      },
      lineHeight: 20,
    };

    return {
      code,
      editorOptions,
    };
  },
};
</script>

<style>
.container {
  height: 300px;
}
.container .monaco-editor {
  padding: 10px 0;
  border-radius: 5px;
}
.container .monaco-editor .overflow-guard {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.monaco-editor.no-user-select .view-line {
  /* font-size: 16px; */
}
</style>
