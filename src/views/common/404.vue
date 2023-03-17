<template>
  <main class="my-auto p-5" id="content">
    <div class="text-center text-danger py-5 mt-5">
      <h1 class="display-3">Sorry</h1>
      <h2>抱歉,该页面不存在..</h2>
      <div class="row mx-auto col-8 col-lg-3 mt-3">
      <RouterLink class="btn btn-primary col text-white" to="/">返回首页</RouterLink>
      <button class="btn btn-dark  ms-5 col" @click="$router.go(-1)">回到上一页</button>
      </div>
    </div>

  </main>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "404",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>