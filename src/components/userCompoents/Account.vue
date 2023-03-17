<template>
  <!--  头菜单用户信息,用户未登录时显示登录按钮,用户已登录显示用户头像-->
  <ul class="nav  align-items-center ms-auto navbar-nav ">

    <li class="nav-item" v-show="userInfo!=null">
      <div class="dropdown">
        <a class="nav-link mousePoint " href="#" id="notifyDropdown1" role="button"
           data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
               class="bi bi-bell-fill  " viewBox="0 0 16 16">
            <path
                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg>
          消息
        </a>
        <!-- 消息下拉框-->
        <ul class="dropdown-menu shadow text-black">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link mousePoint  " to="/CKEditor" title="动态发布">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
             class="bi bi-plus-circle svg-icon" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        发布作品
      </RouterLink>
    </li>

    <li class="nav-item ms-lg-2" v-show="userInfo==null">
      <a class="btn btn-sm btn-danger rounded-5" @click="userLogin">登录
      </a>
    </li>
    <!--          登录成功后显示的用户头像-->
    <li class="nav-item dropdown ms-2" v-show="userInfo!=null">
      <a class="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button"
         data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown"
         aria-expanded="false">
        <img class=" avatar-img  rounded-circle " src="../../assets/photo/faker.jpg" alt="">
        <!--                        <img class="tou1 avatar-img rounded-2" src=""  v-else>-->
      </a>
      <ul class="dropdown-menu shadow w-100px"
          aria-labelledby="profileDropdown">
        <!-- Profile info -->
        <li><a class="dropdown-item" @click="gotoAbout">个人主页</a></li>
        <li><a class="dropdown-item" href="#">账户设置</a></li>
        <li><a class="dropdown-item" @click="userQuit">退出登录</a></li>
        <!-- Links -->

        <!-- Dark mode switch END -->
      </ul>
    </li>
    <!-- Profile START -->
    <!--                </div>-->

  </ul>

</template>

<script>
import $ from 'jquery/dist/jquery.min'
import {Modal} from "bootstrap";
import Login from "../common/Login.vue";
import Logout from "../common/Logout.vue";

export default {
  name: "Account",
  components: {Login, Logout},
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  methods: {
    // 退出登录功能,弹出确认modal,点击确认后退出
    userQuit() {
      new Modal($('#LogoutModal'), {
        keyboard: false
      }).show()

    },
    // 点击登录,清空登录modal中的数据然后弹出登录modal
    userLogin() {
      $('#loginPass').val(null)
      $('#loginUser').val(null)
      new Modal($('#ModalSignIn'), {
        keyboard: false
      }).show()
      setTimeout(() => {
        $("#floatingInput").focus()
      }, 800)
    },
    gotoAbout(){
      if (this.userInfo == null) {

      } else {
        let userId = this.userInfo.userId
        this.$router.push({
          path: '/userCenter',
          query: {
            userId: userId
          }
        })
      }

    },
  }
}
</script>

<style scoped>
</style>