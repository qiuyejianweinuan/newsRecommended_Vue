<template>
  <div class="modal fade py-3 " tabindex="-1" role="dialog" id="ModalSignIn"
       @keyup.enter="userLogin(username,password)">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-3 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <h3 class="fw-bold mb-0 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            用户登录
          </h3>
          <button type="button" class="btn btn-default" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>

        <div class="modal-body p-5 pt-0">
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
          <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-person-bounding-box" viewBox="0 0 16 16">
              <path
                  d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            </svg>
            Sign up with Other
          </button>


        </div>
      </div>
    </div>
  </div>
  <!--  <Message></Message>-->
</template>

<script>
import message from "@/components/commonMsg/message.vue";
import $ from 'jquery/dist/jquery.min'
import {Modal} from "bootstrap";
import {inject} from "vue";

export default {
  name: "Login",
  components: {
  },
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