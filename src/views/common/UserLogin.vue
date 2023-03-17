<template>
  <Login></Login>

</template>

<script>
import {Modal} from "bootstrap";
import Login from "@/components/common/Login.vue";
import $ from 'jquery/dist/jquery.min'
export default {
  name: "UserLogin",
  components: {Login},
  mounted() {
    let myModal = new Modal(document.getElementById('messageModal'));
    if(localStorage.getItem("userInfo") != null){

      location.href = "/"
    }
    new Modal(document.getElementById('ModalSignIn'), {
      keyboard: false
    }).show()
  }
}
</script>

<style scoped>

</style>