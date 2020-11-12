//import vue
import Vue from 'vue'

//import vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'global',
            component: () =>
                import ("@/views/global/Index"),
        },
        {
            path: '/indonesia',
            name: 'indonesia',
            component: () =>
                import ("@/views/indonesia/Index"),
        },
    ],
    mode: 'history'
})

export default router