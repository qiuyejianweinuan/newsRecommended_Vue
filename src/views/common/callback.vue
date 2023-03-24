<template>
  <main class="my-auto p-5" id="content">
    <div class="text-center text-danger py-5 mt-5">
      <h1 class="display-3">This is github callback page</h1>
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
import axios from "axios";

export default {
  name: "callBack",
  components: {Footer, Header},
  mounted() {
    let code = this.$route.query.code
    if (code) {
      console.log("从github接受到的回调code为:", code)
      const {data} = axios.post('https://httpbin.org/post', {
            clientId:'',
            lastName: 'Flintstone',
            orders: [1, 2, 3],
            photo: document.querySelector('#fileInput').files
          }, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      )
    }
  }
}
</script>

<style scoped>

</style>