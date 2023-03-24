<template>
  <div class="modal fade py-3 " tabindex="-1" role="dialog" id="ModalSignIn"
       @keyup.enter="userLogin(username,password)">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-3 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <h3 class="fw-bold mb-0 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill"
                 viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            用户登录
          </h3>
          <button type="button" class="btn btn-danger btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>

        <div class="modal-body p-5 pt-0 mt-3">
          <form id="loginForm">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="loginUser" name="userName"
                     placeholder=" " v-model="username">
              <label for="loginUser" class="opacity-50">用户名</label>
            </div>
            <div class="input-group mb-3">
              <div class="input-group h-45px">
                <input type="text" class="form-control" id="loginPass" name="checkCode"
                       placeholder="验证码" v-model="password">
                <!--                <label for="floatingInput"><span class="opacity-50">验证码</span>-->
                <!--                </label>-->
                <span class="btn btn-outline-danger btn-sm" style="line-height: 40px">获取验证码</span>
              </div>
            </div>
          </form>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  :class="{'disabled':username==null||password==null}"
                  id="loginBt" @click="userLogin(username,password)">登录
          </button>
          <small class="text-muted">没有Universe账户?
            <RouterLink target="_blank" class="text-orange"
                        to="/register">点此创建！
            </RouterLink>
          </small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">使用第三方账户</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit" @click="loginWithGithub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-github"
                 viewBox="0 0 16 16">
              <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Sign up with Github
          </button>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import message from "@/components/commonMsg/message.vue";
import $ from 'jquery/dist/jquery.min'
import {Modal} from "bootstrap";
import {inject} from "vue";
import axios from "axios";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: null,
      password: null,
      loginUser: localStorage.getItem("userInfo"),
      userInfo: {
        userId: 'JR87Rrkv0HJE',
        username: 'faker',
        userAvatar: 'src/assets/photo/faker.jpg'
      }
    }
  },
  methods: {
    userLogin(username, password) {
      let myModal = new Modal(document.getElementById('messageModal'));
      if (username === 'root' && password === 'root') {
        //模拟登陆
        this.loginSuccess()
        $("#msgBody").text("登录成功")
        myModal.show();
        setTimeout(() => {
          myModal.hide()
        }, 600)
        // $("#messageModal").modal('toggle')
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        //
        setTimeout(() => {
          location.reload()
        }, 1000)

        this.username = null
        this.password = null
      } else {
        $("#msgBody").text("账号密码错误请重新输入")
        myModal.show();
        setTimeout(() => {
          myModal.hide()
        }, 1000)

      }
    },
    loginSuccess() {
      $("#ModalSignIn").addClass('hide').removeClass('show')
      $(".modal-backdrop").addClass('hide').removeClass('show')
    },
    loginWithGithub(){
      location.href = 'https://github.com/login/oauth/authorize?client_id=b8a84e838fe5b2059593'
      // axios.get("https://github.com/login/oauth/authorize",{
      //   headers:{
      //     'Access-Control-Allow-Origin': '*'
      //   },
      //   params: {
      //     client_id: "b8a84e838fe5b2059593",
      //     redirect_uri: "http://localhost:5173",
      //   }
      // })
    }
  },
  mounted() {

    this.username = null
    this.password = null
  }
}
</script>

<style scoped>

</style>