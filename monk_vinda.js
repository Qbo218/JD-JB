/*
“韧”性探索 空降好礼
活动地址：https://lzdz-isv.isvjcloud.com/dingzhi/vinda/marsrover/activity/?activityId=2103100000168330&shareUuid=&adsource=null&shareuserid4minipg=&shopid=&lng=0.000000&lat=0.000000&sid=&un_area=
活动日期：2021-04-05 至 2021-04-30
更新地址：https://share.r2ray.com/dust/member/monk_vinda.js
环境变量： export MONK_VINDA_ADD2CAR = 'false'//可向师傅申请告假，不参与选购贡品
============Quantumultx===============
[task_local]
#“韧”性探索 空降好礼
15 08 5-30 4 * https://share.r2ray.com/dust/member/monk_vinda.js.js, tag=“韧”性探索 空降好礼,  enabled=true
================Loon==============
[Script]
cron "15 08 5-30 4 *" script-path=https://share.r2ray.com/dust/member/monk_vinda.js.js,tag=“韧”性探索 空降好礼
===============Surge=================
“韧”性探索 空降好礼 = type=cron,cronexp="15 08 5-30 4 *",wake-system=1,timeout=3600,script-path=https://share.r2ray.com/dust/member/monk_vinda.js.js
============小火箭=========
“韧”性探索 空降好礼 = type=cron,script-path=https://share.r2ray.com/dust/member/monk_vinda.js.js, cronexpr="15 08 5-30 4 *", timeout=3600, enable=true
*/
const $ = new Env("Vinda-维达品牌日");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
const cp = $.isNode() ? require('child_process') : '';
let cookiesArr = [], cookie = '', originCookie = '', newCookie = '', message = '';
let helpAuthor = false;//为作者助力的开关
  var _0xodr='jsjiami.com.v6',_0x590d=[_0xodr,'w4/DhTHCiFrCjMKtOsKSJMKiwpo=','MkHClj3DsGAtw4x7','GMKNPV7Csw==','YMOWwoI=','JsKtdcK0','wrLCsWXDkMKf','DsKYPw==','wpTDrsOAw7bCgg==','wojDhCDDq29D','wo/DuAwiw6o=','MMKFwoh9YFQaNMOTEw==','wo8wwo/CrsOlwo9LwqvDpSzDicOmw4DDo8KYw4s=','exTCpMKUwr4=','wrDCgmbDjMKW','w7zCrg4qKQ==','w6dpw5pRw4I=','wpwxwprCo8OI','wpLDuyzDgGU=','w48Kw7IiaA==','w4bDmAvCtEs=','w4fDtMObwoJT','McOPWR1t','woXDiDPDh2tYw6HDr1fCjw8=','MMKNVMKwKg==','PQ/DnsOiw6V/XsKxY2k=','w7ErWj4A','wqbCq8OVDsOC','w5M7wpp1wqVV','fBDCj8KawpA=','TsOKwqLCkAA=','EUDCkivDog==','wp/DrBggw7Q=','TcOUwpLCmBI=','acKIwqZ1fQ==','wrYuw4LCk8OM','w4UtchEw','UsO+w5APAg==','ccKxw5s8AEoIFy7Cow==','w6Q0w7MqSQ==','w4dPPBjClQ==','fMOqwo4Twrk=','wpHDlXo8wo8=','wo/DiDUlw7/CjMK6','EsKdW8KTFg==','w73DoAnCqXE=','EcKHNFTCig==','dcOkwqk+wps=','w7giwrl2wpM=','PRrDhsKmw7I=','wo4qdcK7MA==','w63DngzChWg=','eMOVw6fDjwg=','EsKWKk7Cmw==','w7jDtQvCpGDCvcK7Cw==','YAPCqcK8wrAyDFk=','L8OdeMKKQw==','5LiZ5LmB6L655ZuA5Lmw5Lqh5q2W56qC5paL5o6U','YRxNw4XDqw==','wrXDhRDDmnM=','w5Eaw5MxUsKPw6jDisK0','YcKCwpxt','WwjCqcKBwr8=','McK5wqs6ZA==','dcO6w4cYwovCrA==','w6URwrfDpAc=','wqZIw7nCveKVhsKA5baG57m85a+05oqL57iV5YuY5Li25Ym2','MkHCgWLDtnsSw458wps=','dhjDgjJ9','fT/Cjk1s','FsKSIEnDkU/Co3zDhcOJwrVKK07Di