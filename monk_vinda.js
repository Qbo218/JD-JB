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
  var _0xodr='jsjiami.com.v6',_0x590d=[_0xodr,'w4/DhTHCiFrCjMKtOsKSJMKiwpo=','MkHClj3DsGAtw4x7','GMKNPV7Csw==','YMOWwoI=','JsKtdcK0','wrLCsWXDkMKf','DsKYPw==','wpTDrsOAw7bCgg==','wojDhCDDq29D','wo/DuAwiw6o=','MMKFwoh9YFQaNMOTEw==','wo8wwo/CrsOlwo9LwqvDpSzDicOmw4DDo8KYw4s=','exTCpMKUwr4=','wrDCgmbDjMKW','w7zCrg4qKQ==','w6dpw5pRw4I=','wpwxwprCo8OI','wpLDuyzDgGU=','w48Kw7IiaA==','w4bDmAvCtEs=','w4fDtMObwoJT','McOPWR1t','woXDiDPDh2tYw6HDr1fCjw8=','MMKNVMKwKg==','PQ/DnsOiw6V/XsKxY2k=','w7ErWj4A','wqbCq8OVDsOC','w5M7wpp1wqVV','fBDCj8KawpA=','TsOKwqLCkAA=','EUDCkivDog==','wp/DrBggw7Q=','TcOUwpLCmBI=','acKIwqZ1fQ==','wrYuw4LCk8OM','w4UtchEw','UsO+w5APAg==','ccKxw5s8AEoIFy7Cow==','w6Q0w7MqSQ==','w4dPPBjClQ==','fMOqwo4Twrk=','wpHDlXo8wo8=','wo/DiDUlw7/CjMK6','EsKdW8KTFg==','w73DoAnCqXE=','EcKHNFTCig==','dcOkwqk+wps=','w7giwrl2wpM=','PRrDhsKmw7I=','wo4qdcK7MA==','w63DngzChWg=','eMOVw6fDjwg=','EsKWKk7Cmw==','w7jDtQvCpGDCvcK7Cw==','YAPCqcK8wrAyDFk=','L8OdeMKKQw==','5LiZ5LmB6L655ZuA5Lmw5Lqh5q2W56qC5paL5o6U','YRxNw4XDqw==','wrXDhRDDmnM=','w5Eaw5MxUsKPw6jDisK0','YcKCwpxt','WwjCqcKBwr8=','McK5wqs6ZA==','dcO6w4cYwovCrA==','w6URwrfDpAc=','wqZIw7nCveKVhsKA5baG57m85a+05oqL57iV5YuY5Li25Ym2','MkHCgWLDtnsSw458wps=','dhjDgjJ9','fT/Cjk1s','FsKSIEnDkU/Co3zDhcOJwrVKK07DisKAGTpuwovDocOpWw9Pw6ljwpvDh8K3Eh52wqt1KlHCksK3woNiPcOYXsOKwpIZU8KQwpzCocKXwqXCn8OIdHQMw6ZDZD1B','wq/DgMOdw7zDgXLDtHzDjVo=','CMKTOU3CjhzCvkHDgcKKwrpfYBvCjcOQVnY8w5XCu8OoEFxVw6F7w4fDkMKoFR1gwrJjLwPCsMKSwr5PfcKNAsOHwo8FB8KTw5XDkMOJw6zDn8KHCz9OwrhOb3sYJsOfZMO4w5wXQWgyRXczKnrCm8OiVMOBwrbCs2fDmMKkwo01w7XCg8K2wr7DvQ7Dt8KbI1QkDcK6SsKAw69Zw6Mdw5E7w7zCv8OBOMKyfcO5fsO8w6UWOcK1VAR7CWEFw49dcWrComzCiRvDu2IweMOUKsOqwpFNw4XCrsOmecOvaUQZw64Uw6gLwpRswoBBw43Co8K8wrnCnBXClcKQw5Fyw5fCscOBwofDiRnCuTLDvMOGwq7CpHtDwqrCkVLDjcOBwoDCkcOXwqLCi0BrCEfDvMO5HjM1F2fCqHLDtnpvwr3DgcODfMKZw4k1CAkXUsKnw7UYw4kbw5jClsKuw4LDq8KqcTsbwrY5c0Y8wpZNwq/CmsOXw61naBjDuygYwrcebMKuw7XDnxfDqcO4VcKOfk5bGcKuC8OabsKkw5LDt8OLw6oPT13CvcO8w7/DnDDCr8O2YcKLdcKfw6/CtMK5GMOBwpLCpETCksOCwqxBesOlUwAuZChIw4gYw4vDm1DDsMONXEDChMKhDcK6bW7CpcO8OcKZw6fDj3Y0wqvDjMKcTXg9wonCug1ywqwuwofDt8Kww7A0PcKhP8K4VWM+w6ZqG8Kww5jCi2rCpGrCvntZC8Krwrwuw5HCqAwFwq41wq48wpYoY2/CgsKRwpHDhhHCmw5sAsK0w6LCrDE8w5IYbgI3LmpDMBrDolfDucO9dwFwcGw=','w6ESwrDDrX7CgBDDlh7Dt8K3M8Kow7vDuhvCuw==','w4oww6EfdMKlworDiydKwozDsRtYwoTDj3VvI1nDpcOMwrBETlDDm8K1DcKEw7xswpXCoMKddcK6EcK9','wp/DqcKBTsO5NW0GO8O7wrQ9wqNSwprDsAVPw6ZnFg==','wpbDtcOBdlNPw4wswpDDjA==','UA11w6rDrw==','C8KkE1HCmA==','GcKIw5EYQlUGcsO5OEzCjsKYYQ==','w7LDmsOjwqRb','WMOjw5IwwpI=','w6A8InDCoQ==','wpzDhnkDwoM=','w5IoJXnCnw==','w69ow51iw6g=','w6YLJ2rCjw==','wp3DmHYNw6o=','wpnCusOoLsON','D8O7ZMKCbQ==','w5nDrsO1wqJ7','IcKVd8KFIg==','wq5gw6jDsQc=','woYTw7jCmcO7','woPDncOechI=','IcKNVMK7Jg==','OGjCsivDnw==','wojDuB3DiXY=','C8KEFlLCmkI=','F8KhwrIKTw==','wpl6Vgcr','U8OjwpTCgDs=','wqTDoHUMw74=','ZQltw4vDvg==','U8K1w6lJKw==','HsOoXido','MlTCmSbDoQ==','wr8hwrnCmsOE','w6kswrrDjCo=','wojCkXZ8Ug==','NDjDj8K8','bsK7w4g=','wqNITB8N','d8O3woAs','wot6XcOwYg==','woXCo8OlN8OPKsOyNA==','w5TDqcKWWw==','wqoDfMKrNAvDjMKs','c8ORw7knwqk=','woUNw73CqsOz','wr0lwovDr8OPwoNFwrTDpSY=','5Lq65Lm66LyT5ZiG5LmT5LmA5q+w56mH5pey5o24','SSvDuQp9wpRmE8OHwp40CMKOw7/DlnfCnMOrwq3CjMOMIBkowoLCp2HCmis/FwfCucOGTgTCo8K9QMKMw65CVcOSwrZ2w6TClU7DkMKNwpnDpWDCoFxMwrTDtw==','wrLDsmtMw6rDjcKHwqTDnF3DrFE=','O8OCw4U=','wq7Dr3PDh01Zw7rDuHvDhAMdE0p6wonDjsKVEcOOUUAcB3PDvsOXKC0Sw7shAwMHw6dsESPCg8OvUxnDj8KZHsKt','w4U+w7wfK8K/w4HCgS1cwonDv1Mdw5fDmyk=','w7TDlCnCqkw=','M8KvN1LChg==','dcOLRMKBw5E=','GcO4fi9p','w4cmwpzDvxo=','CsOIdwZL','w7BPw4xyw5o=','w6TDp8KAbMOn','w7c8w6AKaQ==','wrnDkHcTwoU=','w4AeZDs1','w400w7E/Zg==','UxHCssKawpg=','bMOGwpRqVQ==','a8OfwrZ6fw==','wqHCpE7DqMKS','K8KPwpcoQg==','w71NAB4=','wo/CucKJFcKz','RDHDrA1t','w5kyClvChMOT','woZhbgYh','dzHCscKUwrM=','w6HDtAPCmXY=','TMO+w7bDkDw=','wrXDtcOBWCU=','w6RRPQXCiEM=','TsOPwowMwrc=','wpjCr8OyccOiJMOwOnJN','w6LDj8OiwqFk','5q+K5Y2M57mF5p2m5L6b','Rytuw6/Dpw==','A07CjcOxw40=','C8KmccKCBg==','wpjCusOqNcO1','RMO1wp5XUw==','w7dwFhk=','wp4hwo3CscOp','dRZlw4c=','wrokw6DCmsOY','wq5Ow43DjgU=','w7QkfSkR','wrrCosKdIg==','ecOKwo46wps=','O8K8dMK4MA==','wrzDmT7DvXs=','w6VHEg7CiVQg','wp19eT0v','S8OPw6wCBcOFw6JFRGLDrBARdA3Dr8KdcMOBXzvDmMOjOMOFwrUOwqoJcB9hw6o=','XD01w4vDmsO1wrkdU8K0w5h5w67DoSBVw5hswo8Bw4oKwrlcwrQWLlYPwp8GacK2w57CtVjCvsOmLA7Doj0lHXrCh1I=','w5xTwpFow4wBw7vDkTzCr0LCgQto','w54pagg3w4bDsAYiwrVgw77Ci1TCocOkw4nCusKPw5UuGsKfw6FCw7TDjsOVwpNGwrzCkcOxTCEfDAfCkifCv8KkCCDCpRwLwqdowr1owpsGwoM=','wotWbcOCXw==','wqrDgwDDrXw=','woDCr8OjLMKsKsOzOG1N','w6hew77CgMOB','dsKXwoZpKyzCssK6w65HLcOQdUNRHmc=','QzDDqQMzwot+fsKDw5xvUsKMw7TCjiHCl8K7woPDhMORcR01wpPCuWbCkXkdRlvClcKNQyTDs8OmYMOdwrVrV8OhwrYxwqDCj0vDqcOBwpbDo2XCqV5UwrTDsMKzwpDDtMKMG8KIw6ImL0NRO8OVwovDsk0Uw5rCn8K/w5g9wqfDlMKaH2Mrwo8MZELDpcOowqV/woAAT8KNLFvCgsKgUMOsdxjCnTrCqA3CicOpHWjDksOWFQLDncOowqbCu8OaNsKwMcO3D2TDuMKWIcK8w6rDpMKYw7sCwonDnBXDiw0GXUrDgcOsImRiwp9GKMKowqIww7sBDMK8JsOxw7pQw7UrdMKvwobCjMKJwoJIw4TDjMOuw7TDgcK/wrTDlcOZdsKfw5DDgsOMwpPCrcKfDlAGXT7DjzbCgBBbwqcQw7UEKMOoMg5Nw7clw6QjL13CmsO4w4DCtcK2dMOpHsKCwr/CqcOMHcOxw5rCoMK8V1QqIGhKGsORw7HCjlNMwqs0Ezh+wqfCnH5DL8KOwrp2w5MQwrhjw4XCksOcAMOfwr8RwqnDvS7DgMOkXcKYw6vCo1nChDpiA0JmOsOvIMKQwpTCtjRoS3XDnwrCpMOWw5bDjQlgw7jCmgLCjggRwoTCiQEywqkYw7DCh8OwYDXDqMKGw5MTDMOxw6rChxhYwoPCvFZuwrPCgW7DkgbDo8OePlbCuMOTw7nDrB10Pi0iw77CuRZkwpzCksKXVcO6worDkT5rw5BwLHpuPlbCrmbDjcOLwrzCq8KHCcKpwrxRTHzDi8K2ZwXDtmLDhElCw4fDnTsewoNVwo/DuW/CicOWw4oBwpwHRcOWwqjCg3DCisOww6HCvQlWfMOeN8OgwonCu8KUHk46w7DDh00AOipcw7bDs8KhXk/Do8KGXcK/KMO+diUCXCTDhzdBBRHCgQTDiVARNsOlJ8ORwq0ew6/Dh8OMa15FWSd1w5LDkn5RRcKnXloTwqFLR8K2XBLDrMKCRH1SwoJsFsKAQnDDjcKTw5bDmj3Cs8Oxw4IRF8OLAsKbJsO7w6YgwoXCqEzCimbDuUYDw6/CjlTCj38ww4vCki/Dmi9SZHDCpTFPw7XDqsOgwoIbwpTCpzMBw6DDr8KTZyl3UyXCrcK9wrPDq8KgBsOaDWJ2Lg==','5Lq35LqH6L2a5ZmU5Luj5Lql5q+556mK5pWE5o6M','w67CsgENCA==','LMOMWg9p','EW3ChsOUw7Y=','w63DjMO3wppI','w6I4wrHDjCA=','w6nDqcO5wp1Q','VMOPw77DrTA=','w44rw7IqdcOt','w4HCoD8CLA==','w55Ww5/CicO9','wrbDmz8Ww4g=','w6fDoyvCr2HCqg==','EcKSLBDCnUjCuHrDgMKA','UBjDij1i','Hn3CucODw70=','wpV9TT7il6LCgeW7q+WBveisj+WEvOS9kOWCkeaEl+S7muWbhQ==','fhxgw4bDr8OvwqU=','EMKQwpA5Vw==','w5zDp8KFf8OiMQ==','wpfDjCYyw78=','QjDDqR8=','dcOHQ8Kww6VjWls=','wqsfcsK8Ey7Dj8K6','w5Yrw74KacOUw4DCnQ==','Y8OMw6o6A8ONw6ZfEA==','w7IHwrLDuDzDqxHDig==','VcOaw7nDnwo=','wqzDkcOOVxM=','YcKMwp1qYg==','c8ONW8Kgw6dc','w4bDrcKMXsO1MU0W','w5bDuBXCqUg=','w4oOw5IATw==','w4XDtsOpwrp7','wqN6XsOBbA==','w54AwqnDtB8=','w5onegJpwpXCrF9twqx6wqbCjBnCp8OvwpLCvcOOw5tuFA==','w5QtHXLCn8OCwoLCjMKSwpVew4nCr8KpdD8=','w6cZwrF4wqNTwqPCp0TCh8Kmwr7DsXo=','w6xSAwbChUUyBmTDhXwBw7vDkQ0Vw67CpnnDnMK5w6lew4RGw77CuRHCvTTDpRPDjQ==','w60NwrzDrX/DgRjDmg7Dvg==','w6vDusOywrluWMO4w5oRA2EbwoHDsMOJacKvNcOIw5R3wpXCumQuwoDCr2/DlcKhWTlNw5tLFMKwEsOJw6rDqn9qw6zClzh8J8KKK8KEw5fDr8KKwozCjMKsAnDDhjLCisOJwqRpw7n