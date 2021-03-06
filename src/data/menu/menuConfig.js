const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: '按钮',
                key: '/ui/buttons',
            },
            {
                title: '弹框',
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: '通知提醒',
                key: '/ui/notification',
            },
            {
                title: '全局Message',
                key: '/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/ui/tabs',
            },
            {
                title: '图片画廊',
                key: '/ui/gallery',
            },
            {
                title: '轮播图',
                key: '/ui/carousel',
            }
        ]
    },
    {
        title: '表单',
        key: '/form',
        children: [
            {
                title: '登录',
                key: '/form/login',
            },
            {
                title: '注册',
                key: '/form/reg',
            }
        ]
    },
    {
        title: '表格',
        key: '/table',
        children: [
            {
                title: '基础表格',
                key: '/table/basic',
            },
            {
                title: '高级表格',
                key: '/table/high',
            }
        ]
    },
    {
        title: '富文本',
        key: '/rich'
    },
    {
        title: '流程图',
        key: '/flowsheet'
    },
    {
        title: '城市单车管理平台',
        key: '/citys',
        children:[
            {
                title: '订单管理',
                key: '/order',
            },
            {
                title: '城市管理',
                key: '/city',
            },
            {
                title: '员工管理',
                key: '/user'
            },
            {
                title: '车辆地图',
                key: '/bikeMap'
            },
        ]
    },


    {
        title: '受理平台',
        key: '/ims',
        children:[
            {
                title: '仓库实时监控',
                key: '/order',
            },
            {
                title: '运输实时监控',
                key: '/user'
            },
            {
                title: '集中集客受理日志',
                key: '/bikeMap'
            },
        ]
    },

    {
        title: '律师行业管理平台',
        key: '/lvshi',
        children:[
            {
                title: '首页',
                key: '/lawyer/home',
            },
            {
                title: '团队管理',
                key: '/lawyer/team'
            },
            {
                title: '收案',
                key: '/lawyer/case'
            },
            {
                title: '客户',
                key: '/lawyer/custer'
            },
        ]
    },
   
    {
        title: '图标',
        key: '/charts',
        children: [
            {
                title: '柱形图',
                key: '/charts/bar'
            },
            {
                title: '饼图',
                key: '/charts/pie'
            },
            {
                title: '折线图',
                key: '/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/permission'
    },
];
export default menuList;