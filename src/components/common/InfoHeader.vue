<template>
  <div class=" navbar navbar-expand-lg navbar-light p-1  fixed-top bg-white animate__animated" id="infoHead" style="transition-duration: 0.5s" >
    <LoadScroll></LoadScroll>
    <div class="header">
      <div class="navbar-brand">
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
        <search-group></search-group>
<!--        <HeadMenu></HeadMenu>-->
        <Account></Account>
      </div>

    </div>
  </div>

</template>

<script>
import $ from 'jquery/dist/jquery.min'
import LoadScroll from "@/components/Load/LoadScroll.vue";
import NewsMenu from "@/components/news/NewsMenu.vue";
import SearchGroup from "@/components/search/SearchGroup.vue";
import HeadMenu from "@/components/common/HeadMenu.vue";
import Account from "@/components/userCompoents/Account.vue";
export default {
  name: "InfoHeader",
  components: {Account, HeadMenu, SearchGroup, NewsMenu, LoadScroll},
  mounted() {
    $(window).scroll(function () {

      if (document.documentElement.scrollTop >= 25) {
        $("#infoHead").addClass("shadow")

      } else if (document.documentElement.scrollTop <= 25) {
        $("#infoHead").removeClass("shadow")
      }
    })
  }
}
</script>

<style scoped>

</style>