<template>
  <div class="p-4 bg-dark text-white rounded-4 mt-4 col-11 mx-auto col-lg-12 " v-show="userInfo == null">
    <div class="modal-header border-bottom-0">
      <h3>您还未登录</h3>
    </div>
    <div>
      <p class="ms-3">登录获得更好的浏览以及推荐体验</p>
    </div>
    <div class="ms-3">
      <button type="button" class="btn rounded-btn  btn-light" @click="userLogin">点此登录
      </button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery/dist/jquery.min'
import {Modal} from "bootstrap";
export default {
  name: "LoginIndexCom",
  data(){
    return{
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  methods:{
    userLogin() {
      $('#loginPass').val(null)
      $('#loginUser').val(null)
      new Modal($('#ModalSignIn'),{
        keyboard:false
      }).show()
      setTimeout(() => {
        $("#floatingInput").focus()
      }, 800)

    },
  },
  mounted() {
    if(this.userInfo!=null)
      console.log(this.userInfo.username)
  }
}
</script>

<style scoped>

</style>