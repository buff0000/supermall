import {createRouter, createWebHashHistory} from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

//2.创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: "home",
        component: Home
    },
    {
        path: '/category',
        name: "category",
        component: Category
    },
    {
        path: '/cart',
        name: "cart",
        component: Cart
    },
    {
        path: '/profile',
        name: "profile",
        component: Profile
    }
]


//3.导出router
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})