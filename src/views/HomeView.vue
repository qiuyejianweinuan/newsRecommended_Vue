<script>
import indexIntroduce from '@/components/indexIntroduce.vue'
import Header from '@/components/common/Header.vue'
import NewsFooter from "@/components/common/NewsFooter.vue";
import TopNews from "@/components/news/TopNews.vue";
import NewsMenu from "@/components/news/NewsMenu.vue";
import HotNews from "@/components/news/HotNews.vue";
import LoginIndexCom from "@/components/common/LoginIndexCom.vue";
import RecommendedNews from "@/components/news/RecommendedNews.vue";
import BackVideo from "@/components/common/BackVideo.vue";
import global from "@/global/global";
import {inject} from "vue";

export default {
  components: {
    BackVideo,
    RecommendedNews,
    LoginIndexCom,
    HotNews,
    NewsMenu,
    TopNews,
    NewsFooter,
    Header,
    indexIntroduce
  },
  data(){
    return{

    }
  },
  mounted() {
    const global = inject('globalProp')
    console.log(global.global.apiUrl)
  }
}

</script>

<template>

  <Header></Header>

  <index-introduce></index-introduce>

  <main>
    <div class="py-5 mt-6">
      <div class="container">
        <!--                <index-introduce></index-introduce>-->
        <div class="row g-3 flex-row-reverse-new ">


          <div class="col-md-7">
            <!--              新闻分类-->
<!--            <NewsMenu ></NewsMenu>-->
            <!--   置顶新闻      -->
            <TopNews></TopNews>
            <!--   推荐新闻         -->
            <RecommendedNews></RecommendedNews>
          </div>
          <div class="col-md-5 ">
            <!--            登录模块-->
            <LoginIndexCom></LoginIndexCom>
            <!--            热门新闻模块-->
            <HotNews></HotNews>

          </div>
        </div>
      </div>
    </div>

  </main>


</template>
<style scoped>
</style>
