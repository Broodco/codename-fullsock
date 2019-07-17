
const routes = [
    {
        path: '/',
        component: () => import('layouts/MyLayout.vue'),
        children: [
            { path: '', component: () => import('pages/Home.vue') },
            { path: '/resume', component: () => import('pages/Resume.vue') },
            { path: '/portfolio', component: () => import('pages/Portfolio.vue') },
            { path: '/contact', component: () => import('pages/Contact.vue') }
        ]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
