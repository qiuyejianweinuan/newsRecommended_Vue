<template>
<!--  <div class="">-->
    <div class="px-4 p-2" v-for="item in topNews">
      <a class=" newsTop" href="#" v-text="item.newsHead"></a>
      <nav class="mt-1">
        <a class="small me-2" href="#" v-text="item.newsAuth"></a>
        <a class="small me-2" href="#">转发</a>
        <a class="small me-2" href="#" v-text="item.newsTime"></a>
      </nav>
    </div>
<!--  </div>-->
</template>

<script>
export default {
  name: "TopNews",
  data(){
    return{
      topNews: [
        {newsId: 1,
          newsHead: '《永远吹冲锋号》第二集《政治监督》',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '2022年10月30日21:32:06',
          openSw: true,
        },
        {newsId: 1,
          newsHead: '团结共生才是正确选择',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '2022年10月30日21:32:06',
          openSw: true,
        },
        {newsId: 1,
          newsHead: '“乙类乙管”后是否会有第二轮感染？',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '2022年10月30日21:32:06',
          openSw: true,
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>