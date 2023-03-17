import {createApp} from 'vue'
import App from './App.vue'

//axios
import axios from "axios";
//全局css样式
import './assets/main.css'
//bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min'
//jquery
import $ from 'jquery/dist/jquery.min'
//过渡动画
import 'animate.css'
import 'tocbot/dist/tocbot.css'
// import 'plyr/dist/plyr.css'
import router from './router'
import global from "@/global/global";
const app = createApp(App)

app.use($)
app.config.globalProperties.$http=axios
app.provide('globalProp',{
    global
})
app.use(router)



app.mount('#app')
