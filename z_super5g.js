
/*
5G超级盲盒
活动入口：https://isp5g.m.jd.com
活动入口：京东app-手机馆-底部导航栏【手机网厅】-右侧浮标
活动时间：2021-03-18 - 2021-04-30

脚本增加环境变量通知开关，默认开启状态，如需关闭请自行设置。
Z_SUPER5G_NOTIFY //通知变量

后续发布脚本均有加密
因为我介意别人把我脚本里的助力改了。
如果不愿意助力，可以直接下载脚本到本地，通过修改helpAhtor这个参数来关闭助力请求。
请不要修改我的助力。
脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
助力活动链接： https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html
参数 helpAuthor = false

更新地址：https://share.r2ray.com/dust/i-chenzhe/z_super5g.js
已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#5G超级盲盒
5 1,6,11,16,21 * 3-4 * https://share.r2ray.com/dust/i-chenzhe/z_super5g.js, tag=5G超级盲盒, enabled=true
================Loon==============
[Script]
cron "5 1,6,11,16,21 * 3-4 * " script-path=https://share.r2ray.com/dust/i-chenzhe/z_super5g.js, tag=5G超级盲盒
===============Surge=================
5G超级盲盒 = type=cron,cronexp="5 1,6,11,16,21 * 3-4 * ",wake-system=1,timeout=3600,script-path=https://share.r2ray.com/dust/i-chenzhe