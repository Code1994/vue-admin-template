// 换汇路由
import Layout from '@/views/layout/Layout'
const routes = [
  {
    path: '/swap',
    component: Layout,
    meta: { title: '货币兑换', icon: 'form' },
    children: [
      {
        path: 'product-params',
        name: 'ProductParams',
        meta: { title: '产品参数配置', icon: 'form' },
        // FIXME: 如果children只有一个 侧边栏展示有问题
        children: [
          {
            path: 'trading-time',
            name: 'TradingTime',
            meta: { title: '交易时间配置', icon: 'form' }
          },
          {
            path: 'test',
            name: 'Test',
            meta: { title: '侧边栏test', icon: 'form' }
            // hidden: true
          }
        ]
      },
      {
        path: 'bank-limit',
        name: 'BankLimit',
        meta: { title: '银行限额管理', icon: 'form' }
      },
      {
        path: 'customer-limit',
        name: 'CusTomerLimit',
        meta: { title: '客户限额管理', icon: 'form' }
      },
      {
        path: 'channel',
        name: 'Channel',
        meta: { title: '渠道账户管理', icon: 'form' }
      },
      {
        path: 'customer-coin',
        name: 'CustomerCoin',
        meta: { title: '客户货币兑换查询', icon: 'form' }
      },
      {
        path: 'channel-coin',
        name: 'ChannelCoin',
        meta: { title: '渠道货币兑换查询', icon: 'form' }
      }
    ]
  },
  {
    path: '/level1',
    name: 'Level1',
    component: Layout,
    meta: { title: 'Level1', icon: 'form' }
  },
  {
    path: '/level2',
    name: 'Level2',
    component: Layout,
    meta: { title: 'Level2-1', icon: 'form' },
    children: [
      {
        path: 'test',
        name: 'Level2Test',
        meta: { title: 'Level2-Test', icon: 'form' }
      }
    ]
  }
]

export default routes
