import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Layout from '../layout/index.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store'
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Tasks from '../views/Tasks.vue'
import Clients from '../views/Clients.vue'
import Income from '../views/Income.vue'
import AddProject from '../views/AddProject.vue'
import AddClient from '../views/AddClient.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

const routes = [
    // Landing Page
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },

    // Dashboard
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Layout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: Dashboard,
            },
        ],
    },

    // Projects
    {
        path: '/projects',
        name: 'Projects',
        component: Layout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: Projects,
            },
        ],
    },

    // Tasks
    {
        path: '/tasks',
        name: 'Tasks',
        component: Layout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: Tasks,
            },
        ],
    },

    // Clients
    {
        path: '/clients',
        name: 'Clients',
        component: Layout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: Clients,
            },
        ],
    },

    // Income
    {
        path: '/Income',
        name: 'Income',
        component: Layout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: Income,
            },
        ],
    },

    // Add Project
    {
        path: '/add-project',
        name: 'AddProject',
        component: Layout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: AddProject,
            },
        ],
    },

    // Add Client
    {
        path: '/add-client',
        name: 'AddClient',
        component: Layout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: AddClient,
            },
        ],
    },

    // Login
    {
        path: '/login',
        name: 'Login',
        children: [
            {
                path: '',
                component: Login,
            },
        ],
    },

    // Register
    {
        path: '/register',
        name: 'Register',
        children: [
            {
                path: '',
                component: Register,
            },
        ],
    },

    // ForgotPassword
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        children: [
            {
                path: '',
                component: ForgotPassword,
            },
        ],
    },

    // Not Found
    { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes,
})


router.afterEach(() => {
    if (window.innerWidth <= 1200) {
        const sidenav =
            store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

        store.commit('largeSidebar/toggleSidebarProperties')
    }
})

export default router
