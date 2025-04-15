export const routers  = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/view/Login.vue'),
    },
    {
        path: '/home',
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
        component: () => import('@/view/Performance.vue'),
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
    },
    {
        path: '/monitoring/detail',
        name: 'MonitoringDetail',
        component: () => import('@/view/MonitoringDetail.vue'),
        meta: {
        }
    }

];