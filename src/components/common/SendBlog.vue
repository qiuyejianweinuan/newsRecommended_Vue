<template>
  <div class="modal fade rounded-4" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal feed header START -->
        <div class="modal-header">
          <h5 class="modal-title" id="feedActionPhotoLabel">动态发布</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- Modal feed header END -->

        <!-- Modal feed body START -->
        <div class="modal-body">
          <!-- Add Feed -->
          <div class="d-flex mb-3">
            <!-- Avatar -->
            <div class="avatar avatar-xs me-2">
              <!--                            tou1 jquery赋值src-->
              <img class="tou1 avatar-img rounded-circle " src="src/assets/photo/faker.jpg" alt="e">
            </div>
            <!-- Feed box  -->
            <form class="container">
                            <textarea class="form-control pe-4 fs-3 lh-1 border-0 active" rows="3"
                                      placeholder="分享此刻的想法" name="bBody" id="withPhBody"></textarea>
            </form>
          </div>

          <div class="dropdown-divider"></div>
          <!-- Dropzone photo START -->
          <div class="position-relative mousePoint ">
            <!--                    <label class="form-label">添加图片</label>-->

            <input type="file" class="opacity-0 float-start position-absolute w-100px" id="blogPhoto"
                   accept=".jpg, .png" multiple>
            <button type="button" class="btn-primary btn  mousePoint w-100px">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-image mousePoint" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path
                    d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
              photo
            </button>
            <label id="photoUp" class="ms-2"></label>
          </div>
          <!-- Dropzone photo END -->

        </div>
        <!-- Modal feed body END -->

        <!-- Modal feed footer -->
        <div class="modal-footer ">
          <!-- Button -->
          <button type="button" class="btn btn-danger me-2 border-3" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary border-3" id="postBlog">发布</button>
        </div>
        <!-- Modal feed footer -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SendBlog"
}
</script>

<style scoped>

</style>