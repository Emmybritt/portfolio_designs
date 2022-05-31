import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'
import Home from '../views/portfolio/Home.vue'
import About from '../views/portfolio/About.vue'
import Resume from '../views/portfolio/Resume.vue'
import Projects from '../views/portfolio/Projects.vue'
import PortFolioLayout from '../layouts/PortFolioLayout.vue'

const routes = [
       {
        path:'/port',
        name: 'PortFolioLayout',
        component: PortFolioLayout,
        children: [
            {path: '/', name: 'Home', component: Home},
            {path: '/about-me', name: 'About', component: About},
            {path: '/projects', name: 'Projects', component: Projects},
            {path: '/resume', name: 'Resume', component: Resume},
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.sate.user.token) {
        next({name: 'Login'});
    }else if(store.state.user.token && to.meta.isGuest){
        next({name: 'Dashboard'});
    }else{
        next();
    }
});

export default router