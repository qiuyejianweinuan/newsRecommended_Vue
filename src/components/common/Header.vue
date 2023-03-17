<template>

  <div class="navbar navbar-expand-lg p-2  animate__animated" id="topHead">
    <LoadScroll></LoadScroll>
    <div class="header">
      <!-- Logo START -->
      <a class=" text-white tf-wr " href="/" title="网站首页">
        推荐系统
      </a>

      <button class="navbar-toggler ms-auto icon-md btn  btn-dark p-0 me-2 " type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class=" navbar-toggler-icon ">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <!-- Main navbar START -->
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <Account ></Account>
      </div>
      <!-- Main navbar END -->

      <!-- Nav right END -->
    </div>

  </div>
  <div class=" navbar navbar-expand-lg p-1 navbar-light bg-white shadow-sm header-top  position-fixed animate__animated " id="hea"
       style="top: -64px;transform:translate(0,-64px)">
    <LoadScroll></LoadScroll>
    <div class="header">
      <div class="navbar-brand">
        <!--        <RouterLink class="h4 text-danger  tf-wr  float-start" to="/">新闻系统</RouterLink>-->
        <NewsMenu></NewsMenu>
      </div>

      <button class="navbar-toggler ms-auto icon-md btn btn-light p-0 me-2 " type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse1" aria-controls="navbarCollapse1" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class=" navbar-toggler-icon ">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div class="collapse navbar-collapse " id="navbarCollapse1">
        <SearchGroup></SearchGroup>
        <Account></Account>
      </div>

    </div>
  </div>


  <SendBlog></SendBlog>
</template>

<script>
import $ from 'jquery/dist/jquery.min'
import {RouterLink} from 'vue-router'
import Login from "@/components/common/Login.vue";
import SendBlog from "@/components/common/SendBlog.vue";
import SearchGroup from "@/components/search/SearchGroup.vue";
import LoadScroll from "@/components/Load/LoadScroll.vue";
import Account from "@/components/userCompoents/Account.vue";
import HeadMenu from "@/components/common/HeadMenu.vue";
import NewsMenu from "@/components/news/NewsMenu.vue";

export default {
  name: "Header",
  data() {
    return {
      userInfo: null,
      topHei:document.documentElement.scrollTop
    };
  },
  props: {
    header: {
      type: String,
      required: false
    },
  },
  components: {
    NewsMenu,
    HeadMenu,
    Account,
    LoadScroll,
    SearchGroup,
    SendBlog,
    Login,
  },
  watch:{
    topHei(newValue,oldValue){
      console.log(newValue)
    }
  },
  methods: {
    userLogin() {
      setTimeout(() => {
        $("#floatingInput").focus()
      }, 800)

    },
    postBlog() {
      // alert("11")
      setTimeout(() => {
        $("#withPhBody").focus()
      }, 500)

    },
  },
  mounted() {
    let he = 0;
    $(window).scroll(function () {
      let height = document.documentElement.scrollTop
      let hea = $("#hea")
      if (height > 455 && height <519) {
        // console.log(height - 519)
        hea.attr("style",`top: ${height - 519}px`)
        // console.log(hea.attr("style"))
        // hea.removeClass("d-none")
        // hea.addClass(" animate__slideInDown")
        // hea.hide()
        // hea.addClass("fixed-top").addClass("shadow-sm");
        // hea.fadeIn()
        // he = 1

        // console.log(height)
        // console.log(he)
        // if (he === 0) {
        //   console.log(height - 519)
        //   hea.attr("style",`top: ${height - 519}px`)
        //   console.log(hea.attr("style"))
        //   hea.removeClass("d-none")
        //   // hea.addClass(" animate__slideInDown")
        //   // hea.hide()
        //   // hea.addClass("fixed-top").addClass("shadow-sm");
        //   // hea.fadeIn()
        //   he = 1
        // }


      } else if (height <= 455) {

        hea.attr("style",`top: -64px`)
        // if (he === 1) {
        //   hea.attr("style",`top: -64px`)
        //   // $("#hea").addClass("d-none")
        //   // $("#hea").removeClass("fixed-top").removeClass("shadow-sm").removeClass(" animate__slideInDown")
        //   he = 0;
        // }


      }else{
        hea.attr("style",`top:0px`)
      }
    })

    let t = 0;
    $(window).scroll(function () {
      let p = $(this).scrollTop();
      if (t < p) {
        // $("#hea").addClass("bg-opacity-25");

        // $("#hea1").removeClass("d-none translate-middle")
        //下滚
        // //console.log("下滚")
      } else {
        // $("#hea").removeClass("bg-opacity-25");
        // //console.log("上滚 ")
      }
      t = p;

    })


    const fileUploader = $("#blogPhoto")
    fileUploader.change((event) => {
      const files = event.target.files;
      let fileName = '';
      for (let i = 0; i < files.length; i++) {
        fileName += files[i].name + ' '
      }
      if (files.length > 0) {
        $("#photoUp").text(fileName)
      }

      console.log('files', files);
    });
  },
  created() {
  },
  beforeCreate() {

  }, //生命周期 - 创建之前
  beforeMount() {

    //
    // setTimeout(() => {
    //   $("#globalSearch").focus()
    // }, 200)

    const user = window.sessionStorage.getItem("user");
    localStorage.setItem("yxyUser", "123")


  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {

  }, //生命周期 - 更新之后
  beforeDestroy() {
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  } //如果页面有keep-alive缓存功能，这个函数会触发


}</script>

<style scoped>

</style>