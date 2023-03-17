<template>
  <div class="position-sticky rounded-4 col-11 mx-auto col-lg-12 " style="top:5rem">
    <div class="p-2 bg-white rounded-4 mt-4 ">
      <div class="row">
        <div class="h3  col-md-7 col-lg-8">🔥近期热搜</div>
        <div class="mousePoint h6 py-2 col-md-5 col-lg-4 text-danger" @click="changeTest">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
               class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
          换一换
        </div>
      </div>
      <div class="row px-3 mx-auto" v-for="(item,index) in newsHot">
        <a class="h5 newsHot" @click="gotoAbout(item.newId)"><span class="my-auto badge bg-danger me-3"
                                                                   v-text="index"></span>{{ item.newTitle }}
        </a>
      </div>
      <news-footer class="mt-2"></news-footer>
    </div>


  </div>

</template>

<script>
import NewsFooter from "@/components/common/NewsFooter.vue";

export default {
  name: "HotNews",
  components: {NewsFooter},
  data() {
    return {
      newsHot: []
    }
  },
  methods: {
    gotoAbout(val) {
      this.$router.push({
        path: '/NewsInfo',
        query: {
          newsId: val
        }
      })
    },
    getHotNews() {
      this.newsHot = [
        {newId: 'wjkfj', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'erre', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'erget', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'rnrj', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'erre', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'rtnr', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'tbrt', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'rtr', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'brtbrt', newTitle: '国家卫健委：不再公布无症状感染者数据'},
      ]
    },
    changeTest() {
      this.newsHot = [
        {newId: '666gg', newTitle: '热门新闻更换测试'},
        {newId: 'er5re', newTitle: '热门新闻更换测试'},
        {newId: 'er5get', newTitle: '国家卫健委：热门新闻更换测试据'},
        {newId: 'rn4rj', newTitle: '国家卫健热门新闻更换测试'},
        {newId: 'e4rre', newTitle: '热门新闻更换测试'},
        {newId: 'rt33nr', newTitle: '国家热门新闻更换测试'},
        {newId: 'tbfbgrt', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'rtr', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'brtbrt', newTitle: '国家卫健委：不再公布无症状感染者数据'}
      ]
    }
  },
  mounted() {
    this.getHotNews()
  }
}
</script>

<style scoped>

</style>