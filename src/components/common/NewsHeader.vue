<template>
  <div class="navbar navbar-expand-lg  navbar-light bg-white shadow-sm  "
       style="transition-duration: 1s">
    <div class="progress-bar progress-bar-striped bg-danger fixed-top loadStatus"
         role="progressbar"
         id="loadStatus" style=";height: 2px" aria-valuenow="0" aria-valuemin="0"
         aria-valuemax="100"></div>
    <div class="header">
      <!-- Logo START -->
      <RouterLink class="navbar-brand text-danger fw-bold" to="/">
        文章发布
      </RouterLink>
      <div class=" navbar-brand ">
        <a class="mousePoint btn w-50px" @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi  bi-arrow-left"
               viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </a>
      </div>
      <button class="navbar-toggler ms-auto icon-md btn btn-light p-0 me-2 " type="button"
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
      <div class="collapse navbar-collapse me-lg-5" id="navbarCollapse">
        <div class="navbar-nav navbar-nav-scroll ms-auto">

          <!--                下面是用户消息，暂未开发-->
          <Account></Account>
        </div>
      </div>
      <!-- Main navbar END -->


      <!-- Nav right END -->
    </div>
  </div>

  <!--  <UserLogin></UserLogin>-->

</template>

<script>
import $ from 'jquery/dist/jquery.min'
import Account from "@/components/userCompoents/Account.vue";

export default {
  name: "newsHeader",
  data() {
    return {
      userInfo: null,
    };
  },
  components: {
    Account
  },
  methods: {

  },
  mounted() {
    let he = 0;

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

    let loadNow = 0;
    // 设定定时器
    let timer = setInterval(function () {
      // 如果当前的值为100
      if (loadNow === 100) {
        // 清除定时器
        clearInterval(timer);
      } else if (loadNow <= 100) {
        // 将当前状态值累加1
        loadNow += 1;
        // console.log(iNow)
        // setTimeout(function () {
        //     console.log(iNow)
        // }, 2000)
        if (loadNow >= 90 && document.readyState === 'complete') {
          setTimeout(function () {
            $("#loadStatus").addClass("d-none")
          }, 800)
        }
        // 调用执行状态的函数,传入状态值
        $("#loadStatus").attr('style', 'height: 2px;width:' + loadNow + '%');
      }

    }, 5);
  },
  created() {
  },
  beforeCreate() {

  }, //生命周期 - 创建之前
  beforeMount() {
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


};
</script>

<style scoped>

</style>