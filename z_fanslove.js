/*
粉丝互动
类似于京东抽奖机，各个店铺的粉丝互动活动。
有看到新活动可以私信我添加活动ID。 GitHub@i-chenzhe
新手写脚本，难免有bug，能用且用。

更新地址：https://share.r2ray.com/dust/i-chenzhe/z_fanslove.js
============Quantumultx===============
[task_local]
#粉丝互动
3 10 * * * https://share.r2ray.com/dust/i-chenzhe/z_fanslove.js, tag=粉丝互动,  enabled=true
[rewrite_local]
^https://lzkjdz\-isv\.isvjcloud\.com\/wxFansInterActionActivity\/activityContent url script-response-body https://share.r2ray.com/dust/i-chenzhe/jd_getFanslove.js
================Loon==============
[Script]
cron "3 10 * * *" script-path=https://share.r2ray.com/dust/i-chenzhe/z_fanslove.js,tag=粉丝互动
===============Surge=================
粉丝互动 = type=cron,cronexp="3 10 * * *",wake-system=1,timeout=3600,script-path=https://share.r2ray.com/dust/i-chenzhe/z_fanslove.js
============小火箭=========
粉丝互动 = type=cron,script-path=https://share.r2ray.com/dust/i-chenzhe/z_fanslove.js, cronexpr="3 10 * * *", timeout=3600, enable=true
*/

const $ = new Env('粉丝互动');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', originCookie = '', message = '', allNotify = {};
let helpAuthor = false;//为作者助力的开关
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
  let cookiesData = $.getdata('CookiesJD') || "[]";
  cookiesData = JSON.parse(cookiesData);
  cookiesArr = cookiesData.map(item => item.cookie);
  cookiesArr.reverse();
  cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
  cookiesArr.reverse();
  cookiesArr = cookiesArr.filter(item => !!item);
}
$.log('脚本版本 v0.3\n更新时间:2021-03-09 15:55\n仓库：https://www.github.com/i-chenzhe/qx');
  var _0xodG='jsjiami.com.v6',_0x1861=[_0xodG,'w5TCnGPClsOrOA==','wpjDqWwG','wq8xw4vCn8OowpRbw7PCjMOqcA==','eEsFw6HCmjY=','YsO9dcKww6dmdULDkQ==','w5cLPsK+Iw==','JMOSw7hRwoUKMsO4','w5EPIsKpIypmFA==','HyZow5A8Mw==','F8K/w44mw4MHw6Eqw4jDvMOrw43Cow==','wpdpWVfCrsKSwrLDj8OQw6pLw5w5wpQYwqrCvMOeN8Omw5LCvMKJw41Pw4zCosKIwpPCqsK+R8O5VBQlw41tw73ChcK2wpTCiGF6T1MOWF7DvsOiw4Qu','Q2B8w7bCshx7fMK9Mg8gfcKX','wpDCoXJswqk3fcOwDWpja8OSwo1FDsOU','AkXCoQ==','wolrWGjChA==','w6dWN2vCtA==','SSzDuHbCmw==','wqHDk34iVg==','w4LCqTU=','wpfDqCzCgSI=','w7LCtzDCusOJImZySsKUDi1EdTAnGQ3DiRbDsmHDmhEHAyfDnMKpwobCjH41RhHDul10IWvCssKKwpEQwpbCr8K/','wrTCs3B0w4Y=','BXYEw6BMw7A=','AhJww7VJw6Y=','w610wqlrw7fDusKCNQfDscOUDcOmw4o9w7ImwoHCljRPJMOXMn/DqMO3JcOMwrVFw6TDukx0I8OJasKSwoBrXcOrw6RaVW/ChcK2EgfDrU82eMOIY1XDjsOPJh18ScOmw7J4FcKMF