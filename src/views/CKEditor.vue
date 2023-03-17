<template>
  <NewsHeader></NewsHeader>
  <main class="mb-5 mt-3 rounded container  shadow-lg">
    <!--      <li class="dropdown-divider mb-0 ms-3"></li>-->
    <div class="bg-white p-2 animate__animated animate__fadeIn ">
      <Toolbar class="" style=";z-index: 0!important;"
               :editor="editorRef"
               :defaultConfig="toolbarConfig"
               :mode="mode"
      />
      <input class="form-news mt-2 ms-3" placeholder="请输入标题(2～30个字)" id="newsTitle">
      <hr class="dropdown-divider mb-0 ms-3 mt-3"/>
      <Editor class="news-body ms-2 "
              style="height: 500px;z-index: 2!important;"
              v-model="valueHtml"
              :defaultConfig="editorConfig"
              :mode="mode"
              @onCreated="handleCreated"
      />

    </div>

  </main>
  <div class="fixed-bottom navbar bg-white px-5 shadow justify-content-end">
    <nav class="navbar-nav me-5">
      <div class=" nav-item">
        <button type="button" class="btn btn-primary btn-sm w-80px" @click="getBody">获取内容</button>
        <!--        <button type="button" class="btn btn-dark ms-4 btn-sm w-80px" @click="getBody">获取内容</button>-->
        <button type="button" class="btn btn-danger btn-sm w-80px ms-4" @click="getBody">发布文章</button>
      </div>
    </nav>

  </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import $ from 'jquery/dist/jquery.min'
import {onBeforeUnmount, ref, shallowRef, onMounted} from 'vue'
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
import NewsHeader from "@/components/common/NewsHeader.vue";

export default {
  components: {NewsHeader, Editor, Toolbar},
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('')


    const toolbarConfig = {}
    const editorConfig = {
      placeholder: '请输入内容...'
    }


    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })


    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    return {
      editorRef,
      valueHtml,
      mode: 'simple', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated
    };
  },
  data() {
    return {
      newsTitle: $("#newsTitle").length
    };
  },
  methods: {
    getBody() {

      alert(this.valueHtml)
      // alert(editor.getHtml())
    },
  },
  beforeMount() {
    if (localStorage.getItem("userInfo") == null) {
      this.$router.push({
        path: '/userLogin',
      })
    }
  }
}
</script>

<style scoped>

</style>