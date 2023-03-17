<template>


  <ul class="nav mx-auto my-auto align-items-center" id="navHead">
    <li class="nav-item   newsHome"  title="网站首页">
      <a class="newsHome" href="/"  >新闻系统</a>
    </li>
    <li class="nav-item" v-for="menu in newsMenu">
      <a class="newsMenu " v-text="menu" :class="{'active':menu ==='推荐'} "></a>
    </li>
  </ul>
</template>

<script>
import $ from 'jquery/dist/jquery.min'

export default {
  name: "NewsMenu",
  data() {
    return {
      newsMenu: ['关注',
        '推荐',
        '热门',
        // '金融',
        // '科技',
        // ''
      ]
    }
  },
  methods: {

  },
  mounted() {
    $(".newsMenu").click((obj) => {
      $('.newsMenu').removeClass("active")
      console.log(obj.target)
      obj.target.classList.add('active')
      // console.log(obj.target.addClass('active'))
      // console.log(event.target.tagName)
      // console.log($(this))

      // $(this).addClass("active")
    })

  }
}
</script>

<style scoped>

</style>