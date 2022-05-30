import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const Routes = [
    {
        path: '/',
        component: () => import('@/views/index')
    }
]

export default new Router({
    mode: "history",
    routes: Routes
})