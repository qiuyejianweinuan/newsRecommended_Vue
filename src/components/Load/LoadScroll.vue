<template>
  <div class="progress-bar  bg-danger fixed-top mb-1 loadStatus"
       role="progressbar"
       id="loadStatus" style=";height: 3px;z-index: 0" aria-valuenow="0" aria-valuemin="0"
       aria-valuemax="100"></div>
</template>

<script>
import $ from 'jquery/dist/jquery.min'
export default {
  name: "LoadScroll",
  mounted() {
    let iNow = 0;
// 设定定时器
    let timer = setInterval(function () {
      // 如果当前的值为100
      if (iNow === 100) {
        // 清除定时器
        clearInterval(timer);
      } else if (iNow <= 100) {
        // 将当前状态值累加1
        iNow += 1;
        // console.log(iNow)
        // setTimeout(function () {
        //     console.log(iNow)
        // }, 2000)
        if (iNow >= 90 && document.readyState === 'complete') {
          setTimeout(function () {
            $(".loadStatus").addClass("d-none")
          }, 800)
        }
        // 调用执行状态的函数,传入状态值
        $(".loadStatus").attr('style', 'height: 2px;width:' + iNow + '%');
      }

    }, 5);
  }
}

</script>

<style scoped>

</style>