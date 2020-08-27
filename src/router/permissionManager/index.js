// 权限管理路由
import Layout from '@/views/layout/Layout'
const routes = [
  {
    path: '/permission-manager',
    name: 'PermissionManager',
    component: Layout,
    meta: { title: '权限管理', icon: 'form' },
    redirect: 'noRedirect',
    children: [
      {
        path: 'router',
        name: 'Router',
        component: () => import('@/views/permissionManager/Router'),
        meta: { title: '路由管理', icon: 'form' }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/permissionManager/Role'),
        meta: { title: '角色管理', icon: 'form' }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/permissionManager/User'),
        meta: { title: '用户管理', icon: 'form' }
      },
      {
        path: 'department',
        name: 'DepartmentManage',
        component: () => import('@/views/permissionManager/Department'),
        meta: { title: '部门管理', icon: 'form' }
      }
    ]
  }
]

export default routes
