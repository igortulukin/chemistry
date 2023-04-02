import { createRouter, createWebHistory } from 'vue-router'
import SearchResult from "../components/SearchResult.vue";

const routes =[
    {path: '/search/:query', component: SearchResult, props: true},
    {path: '/search', component: SearchResult},
    {path: '/'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router