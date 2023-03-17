<script>
import ToTop from "./components/toTop.vue";
import Login from "./components/common/Login.vue";
import Logout from "./components/common/Logout.vue";
import Message from "@/components/commonMsg/message.vue";

export default {
  name: "App",
  components: {Message, Login, ToTop, Logout},
  data() {
    return {
      userInfo: localStorage.getItem('userInfo')
    }
  },
  methods: {},
  mounted() {
    this.$http.get('https://api.ipify.org?format=json').then((res) => {
      console.log(res.data.ip)
      this.$http.get('http://int.dpool.sina.com.cn/iplookup/iplookup.php', {
        params:{
          ip:res.data.ip
        },
      }).then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    })


    // console.log(this.userInfo)
  },
}
</script>


<template>
  <RouterView/>
  <to-top></to-top>
  <!--  登录modal-->

  <!--  消息modal-->
  <Login></Login>
  <Logout></Logout>
  <message></message>

</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
