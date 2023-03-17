<template>
  <div class="modal fade py-5 " tabindex="-1" role="dialog" id="ModalSignIn">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-5 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <h2 class="fw-bold mb-0 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                 class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg>
            用户登录
          </h2>
          <!--                <button type="button" class="btn btn-default" data-bs-dismiss="modal" aria-label="Close">-->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
               class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          <!--                </button>-->
        </div>

        <div class="modal-body p-5 pt-0">
          <form id="loginForm">
            <div class="form-floating mb-3">
              <input type="text" class="form-control rounded-4" id="floatingInput" name="userName"
                     placeholder=" ">
              <label for="floatingInput" class="opacity-50">用户名</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control rounded-4" id="floatingPassword" name="password"
                     placeholder=" ">
              <label for="floatingPassword" class="opacity-50">密码</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control " id="floatingCheck" name="checkCode"
                     placeholder="验证码">
              <!--                        <span class="input-group-text" id="basic-addon2">@example.com</span>-->
              <label for="floatingInput"><span class="opacity-50">验证码</span>
                <img id="checkCode" class="opacity-75" style="width: 110px;height: 26px;"
                     src="/check"></label>
              <a class="bg-gradient d-none " style="height: 20px;" id="gh">看不清？</a>

            </div>
          </form>
          <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" id="loginBt">登录</button>
          <small class="text-muted">没有Universe账户?<a target="_blank"
                                                        href="#">点此创建！</a></small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">使用第三方账户</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-person-bounding-box" viewBox="0 0 16 16">
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            </svg>
            Sign up with Other
          </button>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin"
}
</script>

<style scoped>

</style>