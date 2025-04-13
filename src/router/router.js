export const routers  = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/Login.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/view/Home.vue'),
        meta: {
            side: true,
            category : 'Dashboard'
        }
    },
    {
        path: '/customer',
        name: 'CustomerHome',
        component: () => import('@/view/Customer.vue'),
        meta: {
            side: true,
            category: '고객관리'
        }
    },
    {
        path: '/performance',
        name: 'PerformanceManage',
        component: () => import('@/view/performance.vue'),
        meta: {
            side: true,
            category: '공연관리'
        }
    },
    {
        path: '/monitoring',
        name: 'MonitoringHome',
        component: () => import('@/view/Monitoring.vue'),
        meta: {
            side: true,
            category: '모니터링/현장구매'
        }
    }

];