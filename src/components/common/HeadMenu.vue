<template>
  <ul class="navbar-nav navbar-nav-scroll  ms-auto ">
    <li class="nav-item">
      <RouterLink class="nav-link mousePoint  " to="/CKEditor" title="动态发布">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
             class="bi bi-plus-circle svg-icon" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>发布作品
      </RouterLink>
    </li>

    <!--                下面是用户消息，暂未开发-->
    <li class="nav-item d-none">
      <div class="dropdown">
        <a class="nav-link mousePoint " href="#" id="notifyDropdown" role="button"
           data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
               class="bi bi-bell-fill  svg-icon " viewBox="0 0 16 16">
            <path
                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg>消息
        </a>
        <!--                    好友列表-->
        <ul class="dropdown-menu opacity-90 w-100px" aria-labelledby="notifyDropdown">
          <li><a class="dropdown-item" href="#">系统通知</a></li>
          <li><a class="dropdown-item">评论</a></li>
          <li><a class="dropdown-item">点赞</a></li>
        </ul>

      </div>

    </li>
  </ul>
</template>

<script>
export default {
  name: "HeadMenu",
  data(){
    return{
      userinfo:localStorage.getItem("userInfo")
    }
  }
}
</script>

<style scoped>

</style>