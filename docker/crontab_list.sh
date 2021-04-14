


# 赚京豆-微信步数挑战
30 19 * * *  node /scripts/jd_zjd.js >> /scripts/logs/jd_zjb.log 2>&1

# 京东赚京东开团
10 7-23 1-31 1 * node /scripts/jd_zjdtuan.js >> /scripts/logs/jd_zjbtuan.log 2>&1

# 泡泡大战
33 7 * * * node /scripts/jd_paopao.js >> /scripts/logs/jd_paopao.log 2>&1






#直播间抽奖
10 20 * * *  node /scripts/jd_live_lottery_social.js >> /scripts/logs/jd_live_lottery_social.log







#京喜财富岛兑换提醒
0 6,12,22 * * *  node /scripts/jx_cfd_exchange.js >> /scripts/logs/jx_cfd_exchange.log 2>&1

#京喜财富岛提现
0 0,6,12,22 * * *  node /scripts/jx_cfdtx.js >> /scripts/logs/jx_cfdtx.log 2>&1

#京喜工厂商品列表详情
10 10 * * *  node /scripts/jx_products_detail.js >> /scripts/logs/jx_products_detail.log 2>&1

# 京喜工厂助力+自动开团参团
0/30 6-23 * * *  node /scripts/jx_factory.js >> /scripts/logs/jx_factory.log 2>&1

# 京喜工厂plus
0 1,18 * * *  node /scripts/jx_factory_component.js >> /scripts/logs/jx_factory_component.log 2>&1
