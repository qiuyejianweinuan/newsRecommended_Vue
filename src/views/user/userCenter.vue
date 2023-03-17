<template>
  <InfoHeader></InfoHeader>
  <main class="container mt-7">
    <h1>用户中心</h1>
  </main>
</template>

<script>
import InfoHeader from "@/components/common/InfoHeader.vue";

export default {
  name: "userCenter",
  data(){
    return{
      userId:null,
    }
  },
  components: {InfoHeader},
  mounted() {
    let userId = this.$route.query.userId
    this.userId = userId
    console.log('用户的id是',userId)
  }
}
</script>

<style scoped>

</style>