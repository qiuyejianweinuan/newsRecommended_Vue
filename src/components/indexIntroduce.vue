<script>
import $ from 'jquery/dist/jquery.min'
import Header from "@/components/common/Header.vue";
import BackVideo from "@/components/common/BackVideo.vue";
export default {
  name: "indexIntroduce",
  components:{
    BackVideo,
    Header
  },
  mounted() {
    $("#indexIntroduceSearch").focus();
  }
}
</script>
<template>

  <section class=" w-100 h-auto">
    <BackVideo></BackVideo>
    <div class="py-5 text-center mt-3">
      <div class="col-lg-6 col-md-8 mx-auto  text-white">

        <h1 class="fw-normal tf-wr">看您想看</h1>

        <div class="input-group container">
          <!--            <a href="#" class="btn btn-primary my-2">Main call to action</a>-->
          <input class="form-control h-50px rounded" list="datalistOptions" id="indexIntroduceSearch"
                 placeholder="">
          <button class="btn btn-danger w-80px rounded " type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search "
                 viewBox="0 0 16 16">
              <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
        <p class="lead">基于推荐算法的新闻推荐系统。</p>
      </div>
    </div>

  </section>

</template>



<style scoped>

</style>