const routes = [{
    path: '/',
    name: 'panpel',
    component: () => import('views/Panel')
}, {
    path: '/login',
    name: 'login',
    component: () => import('views/Login')
}, {
    path: '/register',
    name: 'register',
    component: () => import('views/Register')
}, {
    path: '/news',
    name: 'news',
    component: () => import('views/News')
}, {
    path: '/supplier',
    name: 'supplier',
    component: () => import('views/Supplier')
}]

export default routes