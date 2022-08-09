import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import code from '@/views/code'
export default new VueRouter [{
   routes:[
       {
           path:"/code",
           comments:code
       },
       {
           path:'/cheshi',
           // eslint-disable-next-line no-undef
           comments:cheshi
       }
   ]
}]