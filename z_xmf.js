/*
京东小魔方
活动入口：京东app-新品首发-京东小魔方-百万京豆
活动时间：2021-04-07 至 2021-04-09
不定时京豆活动
新手写脚本，难免有bug，能用且用。

更新地址：https://share.r2ray.com/dust/i-chenzhe/z_xmf.js
============Quantumultx===============
[task_local]
#京东小魔方
10 10 * 4 * https://share.r2ray.com/dust/i-chenzhe/z_xmf.js, tag=京东小魔方,  enabled=true
================Loon==============
[Script]
cron "10 10 * 4 *" script-path=https://share.r2ray.com/dust/i-chenzhe/z_xmf.js,tag=京东小魔方
===============Surge=================
京东小魔方 = type=cron,cronexp="10 10 * 4 *",wake-system=1,timeout=3600,script-path=https://share.r2ray.com/dust/i-chenzhe/z_xmf.js
============小火箭=========
京东小魔方 = type=cron,script-path=https://share.r2ray.com/dust/i-chenzhe/z_xmf.js, cronexpr="10 10 * 4 *", timeout=3600, enable=true
*/
const $ = new Env('京东小魔方');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
let helpAuthor = false;//为作者助力的开关
const cp = $.isNode() ?  require('child_process'): '';
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
$.log('脚本版本 v0.3\n更新时间:2021-03-25 18:25\n仓库：https://www.github.com/i-chenzhe/qx');
   var _0xodf='jsjiami.com.v6',_0x310c=[_0xodf,'RDbCkCs=','OMKCPF82','wrbCvcKFwqBHfMOlw4fCsMKI','w5cOEUE=','wo7ClVnDhGvCvsKxw6fDq8KXwqvDuMOXwp8wHkM=','b8KZwo1JwpPDgcOyw4HDmMK0RA3Dow==','dMO3w7Y6EiHDnXXDusKFFB85wqA=','dMKgOMOWN8K0HE3Di8KQ','O8Kxw7vDj13DvDw3bcK2wqfDig==','M1DDrBzDtnU=','w4kMCkRr','IcOAZXsh','w7lsw5xowo1xd3fDoiodW8KRw7XDiWnDosKdbsOBZ3vCrcKmUQ==','wrHCvW52aw==','csKJwoLDv1c=','D8KDw7TDvjg=','OR5EQHE=','IMKvw48+Iw==','bMKkw43DjMKy','fzHDlcKOwps=','DsOVTFQ5','a8KEwp1uwos=','PMKww4gPBg==','wovCu156w4Y=','TcO2wrLDrEg=','w67Cth0=','HWnDuCA=','c8K15aW56LeowpnCg+WMl+WYi8KWGQ==','K17DuA==','wpfComtZw6dTdMKfaA==','QAfDq8KowqQ=','wp5Gw4AKworCmnhJaMO6FXI=','wqzCh8KWw7HDisOh','w4DDmnzCmFzCoA==','wrvDoMKOwrJe','SyHDtsOC','HsO2UngYw7QDWcOW','wrLCjcKRw7DDg8OnwpjDuGLDtRE=','w4Arw5jCqgbCsg==','X2HCssKecAdrI8K4E8Ox','NkTDvhnDi3jDlQY=','5Lq25Lq46LO/','dXHCtmrDscKyIMOha8K4','w7vCtBnCpcKb','QTLCiirDuy0=','ZnbDvsK/ZsO2PzjCpcK7w5c=','woB1Ij3CsENNw7M=','AcOtRw==','w5IKC0BvUA==','K17DqwPDmmPDmDZuwpJ8','5Lmg5Lib6L6j5Zqa5Li+56id5pS35o2n','EzwOTUc=','wrVoPRXDtg==','T8Knwq1ewqA=','wrxjw7Mnwpg=','woh/Gw1B','w5pMwoHDusO3','STbDsMK2wqbDpMK6wqo+ScOGIhEuw7HDisOE','SsONwo7DmUjCl8OFIsK+WMKQw6ANLMO5wo9J','bsOJwoHDhUA=','wp1Two9sw5I=','SR/CjzTDpA==','wpzCnElgw6M=','CSMnZ28=','QsKCwp1GwrE=','wrNaDSvCog==','D8K2JVbDoA==','LVhbwoXCkg==','DXXDtx7DsA==','wqBoEA==','H0F8w4k=','QCPCizbDuT5SdcKz','w7fDmsO1wpfDuWQ=','N8O0O8KCw4/DjcOYwpnDg0kcUcOaNQ==','AMOGdGsM','NcKnDWrDkA==','WhHDncKOwqY=','CcKZD0TDlg==','wqbCqsKZwqJYbQ==','X8KOworDkg==','woBMw4cLwoPCnA==','wpzCtlhGVCVbIHM8dQ==','w7TDisOnwozDoXnDjcOa','5LiN5LmK6LOJ','PcOwKcKjw7nDjsOnwp7Dgk0=','Ry5iw60k','wqPDoMKbwrVPSsOgMcOcQsOh','w4ZswrjDpcO7U8OLw5s=','f2IiIBLClcKFSSI9wo8=','w7B7w54=','w6Rdwp/Dm8Oj','H8OnU2Qaw6c=','WjzDpcKLwrc=','e3vCsEHDgsKt','KWTDkzxN','woN0woM=','6IyA5Y+P5Lii5Yiq5YqY6KGS5oqv5Yi9','HSN6BcOjwpXCisORwobCk8Khw6Q=','woIRcMKmYMOqG3sCw7bDtA==','wpzDmUTDj23CusKgw7LDocKMwqzDnsOd','HzB/cE3DmQ==','QMO7w7rDoHk=','BS1u','QsKbwpXDnlLClcOeJcKk','w5AOCkZm','w7B7w41/wp13a23DrjAxRg==','eihnw6kmIxbDtsKXwr0=','wqPDoMKI','woIfYsK+Rw==','wqIQwot1Gw4UwrwsdjnCug==','wr3DqsKcwrRGTA==','wrjCoMKewqNRa8OIw6DCqMKA','S8KJw6g=','wp1+wpd4w5vDng==','wrhoFjfDjA==','YcKxIsKTCsO1GUXCrMKXUx8=','wpNZw4QSwo