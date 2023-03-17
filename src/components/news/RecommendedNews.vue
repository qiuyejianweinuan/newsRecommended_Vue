<template>
  <div class=" animate__animated animate__fadeIn  animate__slow " v-for="newItem in news"
       :class="{'d-none':!newItem.openSw}">
    <div class="p-4  row recommendedNews">
      <div class="col-8 p-2 "  :class="{'col-md-12':newItem.newsPhoto==null}"
                  >
        <!--      <div class="col-8 p-2" :class="{'col-md-12':newItem.newsPhoto==null}" @click="gotoAbout(newItem.newsId)">-->
        <!--        <router-link :to="{ name:'PageB',params:{name :'张三'} }">路由测试</router-link>-->

        <!--  推荐新闻的标题      -->
        <a class="newsTop top-0 mousePoint  " target="_blank" @click="gotoAbout(newItem.newsId)"
           style="z-index: 0!important;" v-text="newItem.newsHead"></a>
        <!--        推荐新闻的菜单-->

        <nav class="col-md-12 mt-6 ">
          <a class="small me-2 " href="#" v-text="newItem.newsAuth"></a>
          <!--            <span class="small">{{ newItem.newsComments }}</span><a class="small me-2" href="#">评论</a>-->
          <a class="small me-2" href="#">{{ newItem.newsTime }}</a>
          <span class="small mousePoint float-end" @click="newItem.openSw = false">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-x my-auto"
                   viewBox="0 0 16 16">
              <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </span>
        </nav>
      </div>

      <!--推荐新闻的图片
    -->
      <div class="col-4" :class="{'d-none':newItem.newsPhoto==null}" style="z-index: 0!important;">
        <div class="overflow-hidden news-imgSide">
          <img class="news-img" :src="newItem.newsPhoto" alt="">
        </div>
      </div>
    </div>

  </div>
    <div class="d-flex justify-content-center" :class="{'d-none':!loadNews}">
      <!--              <div class="spinner-border text-danger" role="status" >-->
      <!--                <span class="visually-hidden">Loading...</span>-->
      <!--              </div>-->
      <small class="spinner-text">正在获取新的内容...</small>
    </div>

</template>

<script>
import $ from 'jquery/dist/jquery.min'
import NewsInfo from "@/views/NewsInfo.vue"
import router from "@/router";

export default {
  name: "RecommendedNews",
  data() {
    return {
      loadNews: false,
      getNewsOpen: false,
      news: [
        {
          newsId: 'L89BY',
          newsHead: '推荐新闻1',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '9mins',
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true,
        },
        {
          newsId: '2J8GN',
          newsHead: '国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '9mins',
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true,
        },
        {
          newsId: '8HGF8',
          newsHead: '国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '9mins',
          // newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true,
        },
        {
          newsId: 'KFC98',
          newsHead: '国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '9mins',
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true,
        },
      ],

      newItems: [
        {
          newsId: Math.random() * 1000,
          newsHead: '追加数据',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: new Date().getHours() + ':' + new Date().getMinutes(),
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true
        },
        {
          newsId: Math.random() * 1000,
          newsHead: '追加数据1',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: new Date().getHours() + ':' + new Date().getMinutes(),
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true
        },
        {
          newsId: Math.round(Math.random() * 1000),
          newsHead: '追加数据22',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: new Date().getHours() + ':' + new Date().getMinutes(),
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true
        },
      ],
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
    closeOpen(newItem) {
      newItem.openSw = false;
    },
    userLogin() {
      setTimeout(() => {
        $("#floatingInput").focus()
      }, 500)

    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 滚动条距离顶部的距离
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight // 可视区的高度
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight //dom元素的高度，包含溢出不可见的内容
      let that = this;
      // 滚动条到底部的条件scrollTop + windowHeight === scrollHeight
      if (scrollTop + windowHeight >= scrollHeight) {
        this.getNews() //也可以使用setTimeout定时器延时追加内容
      }
    },
    getNews() {

      setTimeout(() => {
        this.loadNews = true
      }, 500)
      if (this.getNewsOpen) {
        // alert("提取到数据")
        this.news.push(...this.newItems)
        // this.news.push(this.newItems)
        this.getNewsOpen = false;
      }
      setTimeout(() => {
        this.getNewsOpen = true;
        this.loadNews = false
      }, 4000)

    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
    this.getNews()
    // $(window).scroll(function (){
    //   if($(this).scrollTop()===$(window).height){
    //     alert('aa')
    //   }
    // })
  }
}
</script>

<style scoped>

</style>