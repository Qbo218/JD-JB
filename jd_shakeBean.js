/*
    京东会员-摇京豆
    活动入口：京东app-我的-京东会员-摇京豆
    脚本功能 本地用户循环助力并抽奖，脚本无任何别的内置助力。
    适合node环境多账户使用，如仅一个账户就不需要运行这个脚本了。
    每月运行一次即可

    新手写脚本，难免有bug，能用且用。
    ============Quantumultx===============
    [task_local]
    #京东会员-摇京豆
    3 10 1 * * https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_shakeBean.js, tag=京东会员-摇京豆,  enabled=true
*/
const $ = Env("京东会员-摇一摇");
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
const notify = $.isNode() ? require("./sendNotify") : "";
let cookiesArr = [], cookie = "", message = '', helpList = [];
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item]);
    });
} else {
    let cookiesData = $.getdata("CookiesJD") || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map((item) => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter((item) => !!item);
}
var _0xode='jsjiami.com.v6',_0xcb54=[_0xode,'EMODcQg=','cjxj','w7RydcKvwoc=','JcKqYQJD','5oGf5Zeg6Iyi5b+hJQ==','LBlKw5s=','wqNVQivCusKxwrPCn8OxwrRSJALDsMOgwoM=','5LuE5LiE6LOa','FsKCG8OZ','TjHDkcKEfsODw4bDscO7Kw7CgTbCq8Kuw7o=','wrVRQSs=','wrlRRgXCv8K7wqHCiMO/wqp2OxnDvA==','Qn50w67CpUJURVlpdVDDmww=','eSQrw6rCug==','wrJfQDrCp8K7wrjClMO2wrU=','E8KTw5jCvsOrGzzCucKBGMOiw7F8eA==','bcOscMKMZQ==','5oKF5ZaD6I6C5by5KQ==','ZMO1UcKH','GsK8SsKqXsOgOX1Qwoo=','w48hw7HClT8ZTHtdw6nDo8KjwrzDhQ==','csOxVsKTQEN+e8OECg==','wpDDvsOp','IsKEUzd8','woLCr3TCsnk=','AEjCpUY3JMOC','SsKfchXDug==','w5orBcKeOyFN','w4Ahw6M=','5rGP5p6h5Yi15YmU5pyv5L+y5LqY','d8K7wrhHIw7DoMK2woLDlg==','fyduF0U=','CxVtw4tRw68=','5LiF5Lmu6L+E5Zij5LmT56qD5pa45o2l','WgjDoQZ2LsOYwrtEXcKfF8O+KhXCgMOsJsOIwoo8NzlZwrhKR8OrBU3Cmk8ZbGRCecOpL1DCnsKXw70pwo/Dpjo+KsOxdkc5wqnCusKHwonDpQ==','EcKnS8KqQsK0XzxbwoDCg8O2exQKZMO2w7EmBB/DosKxw6/DiA4bfT92wolDaG9zRsOQQhTCq8KNBzzCh8OuFMKscnkzUsKKw4DChQ==','GcKCV8OWwrc1VcKvJS51w5NM','woV8R8O3aw==','wqnCtcK/wox4','wonDjcOo','w7xDw7ppIlA=','wojDun0Jwps=','NMKpaFfDlg==','w5Bea8K2wrw=','IcOtw7M5w4kuEQ==','w4jCmcORwqt8','RSwyw6jCoAQX','wqHDrMOMXQ==','PcOtw5okw6cpGRo=','woDDgcO/wqRbwolzw4E=','J8KuUhVwY8KWw6E=','G8KyTMK/eMOgFnw=','wpdTw67CocKBIznCuA==','w5tUMA==','wrh6Bn8Q','44Os5o6L56Wf44Ku6KyY5Yez6I6q5Y6y5Lud5Lq86LaI5Y6j5LuKCsKTbsKhw4bCucKz55qg5o6A5L2H55SiSCgow4jCo8KU55u25Lub5Lqs566K5Yio6I635Y69','VcOMwrQxf8K4fwnDgVnCvcOAw6ZkNcKYGMOEHMO5w5MEZsK/fcObdsKWE8KpwqhzAmDDtcOuw5fCicOOwpNLw4kM','akoew5EYCwI=','w6LCpnjCoMKYw4rCg8OJwqMRXMO5LRPCssOjdCfDuCbDqhvChMKa','XBPDoR9jbQ==','RH5qw4Q=','w6gmw7XCiiE=','wrTDvsOgw7Vu','Dw5+w75QwqfCu1EkwrLCuBBRCGTCssOXw77Dv1lFSXQ+axIbwqh8VAoQw6jDm8OQH8OAwpDCosOSwp3CrFg=','H8O7w69+w7w=','PsK4WQBNZQ==','wq5QGkkKwpl+wog=','w4N6w4kqCg==','OTHDqsKlTA==','w7lCw7lJKA==','O8KuewheZMKe','wpIyBsOUwqHDmnAB','w43ChGbCp8K0','N8KSw6prJsKoeuW8puWlqOOArOS5sOS6sui3ruWPvg==','CcOYZgUP','WSAlw6DCgQEffA==','VMOmOgXCmhBgKknDhA==','w7NLdcKNwrPDvcO0','wrxDUg==','44Gj5o2T56aR44C5w50NU8KYHkjltoHlpIvml6k=','5LuS5LuQ6LS25Y+Y','JlbCjmbDl8KRw5LCtA==','wrTCrDzDgcK0A2Fc','w7borqzphqjmlI/nmpTlv67ojqrljrJ7w4jDmiDCuhrDhi7DpcONwrnDmDoLVSRsI2TDksKIwphdFcOVwpV2Lxg6O0fCiCDChk3CiMO5SsKYE8O6VHQ=','UHERw7U1IA==','w6/CscKjwqF4WhXltKLlpL3mlo8=','5Li75Lqs6LWH5Y+p','w6LCpnjCoMKYw4rCg8OJwqMEXcOrNRPCs8OqdDjDozPDrArCqcKCw5oEwrjCvMKmR8ON','w7J/w4htNw==','PxlXw44=','KcOIw6BYw7U=','acK7wqVVOxI=','w7ZXXg==','w7LCsSVQw5TDjXI=','U8ORwqMqQsOjPUM=','NcOFZxI5QlxS','w5jlvpvlp4Tli5PliaXDh3LCnsOuOsK1L27CoMKWIg==','eMKsYSnDiw==','H8Omw4VPw4oK','wqTDhMO2wr9W','w5svw63CkQ==','csOxU8KDXkRY','wpDDtMOgw4Rjwo0=','RylyH2g=','EBtjw7o=','OcKCw4LCvcOv','w6RFw7BJIw==','RHZkw4rCnE1pUg==','w49zw5o5B8KBwpE4','w5zlvZvlpq7miILlprnCmzdOW8KKwoR+w6BDw5YL','JsK0WgJK','FcK1w7zCpsOJ','ExdPw7xH','XX5uw5U=','wrtKw6TChsKc','wpDkuqzkuqPota3ljr4=','w6ASbcOqwpM=','HcOqw4hDw7ADUcKW','w4HCo3TCosK1w4fCm8OO','wp3ojIflv7Y+','fDZlEw==','w7Nzw7EkLcKF','SjrDvgF1','a8K/wqZX','U8OZwq0k','wqMLRU7Drw==','wpTDtGg=','HlzlpqTotZMkNOWNqOWZtBYS','RsKIRDw=','ZMK9wr9bORPDgMKmwrvDgWt7woXCpmbDs8OaPsOr','w7sZfsOuwplMwqPDlR9yIMK2w48Ww5fCvQ==','6KKB5Yq25Yqc6IKk5riz5YqF5Yqf5Lqx','5LiA5LmS6L2Q5Zi75LuW56iN5pW45o28','wp3DocOnwo16w4tMfRcrwoLDow==','w40+w7TCiTkUaWZHw6XDosO5wrjDgg5A','DsKPV8OUwqk=','wqfCpsK4wr5gCV/Dv3/CrMO1fBVaBmYjw4bClw3Dg0DCuy9qwotsw57ChMKcORk=','B8OMaxBbA1VSe2vCk1DCs1Uew7TCpw==','Xz0yw7vCvFpdNsK0w58ueMObw63Dt8ONHxbDoMKLTkUbSQ==','UjvDkQ==','QRt6w75Kw7nCqQ0uwrbCqxU9ACvCtsKVwrbDqVhLEn80ZDVQw6Y=','w5o5CsObwpbChg==','AMO3w5lBw5AFVcKVDg==','woXCl8KPwoB6','w6rCgcOpwrNID8KUHwxTwqnDscOFIcOWC8KEw5nCoVxkRw==','WynDpBBh','wqNwMX0s','LMO/WDIk','VcKVwrhRDQ==','SXByw5HCvUJNWVB2','J8KaF8OQcMK9w4M=','PMOuw7sHf0rCgA==','PT/Di8KidQ==','WzHDkg==','wpA0AsO6wp3DiQ==','Uygyw6o=','GlMdGEs=','GHYmFkRowpHCuFgqI8OUwp4HwqHCisKaw5sx','w40TZMKc','wrBDRiPCu8KhwqLCjsOxwqhnAAnDgMOgwpTCqUxxwpPCsQE=','BMOXdgE=','H8OnC8OtNA==','TjksTjxniJaImDihCG.XVdLcom.v6=='];(function(_0x14226a,_0x288498,_0x4d144f){var _0x19440a=function(_0x4e4e09,_0x429cc5,_0x31025c,_0x49073b,_0x9251b2){_0x429cc5=_0x429cc5>>0x8,_0x9251b2='po';var _0x5dbfd7='shift',_0x188829='push';if(_0x429cc5<_0x4e4e09){while(--_0x4e4e09){_0x49073b=_0x14226a[_0x5dbfd7]();if(_0x429cc5===_0x4e4e09){_0x429cc5=_0x49073b;_0x31025c=_0x14226a[_0x9251b2+'p']();}else if(_0x429cc5&&_0x31025c['replace'](/[TkTxnJIDhCGXVdL=]/g,'')===_0x429cc5){_0x14226a[_0x188829](_0x49073b);}}_0x14226a[_0x188829](_0x14226a[_0x5dbfd7]());}return 0x755db;};return _0x19440a(++_0x288498,_0x4d144f)>>_0x288498^_0x4d144f;}(_0xcb54,0xd9,0xd900));var _0x53c0=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=~~'0x'['concat'](_0x2f3e31);var _0x291ebd=_0xcb54[_0x2f3e31];if(_0x53c0['PFimMO']===undefined){(function(){var _0x2d0e6a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x6e77c2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2d0e6a['atob']||(_0x2d0e6a['atob']=function(_0x230109){var _0x4c9db8=String(_0x230109)['replace'](/=+$/,'');for(var _0x439300=0x0,_0x1a9870,_0x16d43f,_0x3e08c5=0x0,_0x296519='';_0x16d43f=_0x4c9db8['charAt'](_0x3e08c5++);~_0x16d43f&&(_0x1a9870=_0x439300%0x4?_0x1a9870*0x40+_0x16d43f:_0x16d43f,_0x439300++%0x4)?_0x296519+=String['fromCharCode'](0xff&_0x1a9870>>(-0x2*_0x439300&0x6)):0x0){_0x16d43f=_0x6e77c2['indexOf'](_0x16d43f);}return _0x296519;});}());var _0x3db635=function(_0x306cc8,_0x3a89c9){var _0x390ae2=[],_0x35bc5f=0x0,_0x1dcb08,_0x4d688c='',_0x4541ae='';_0x306cc8=atob(_0x306cc8);for(var _0x9bbed=0x0,_0x460981=_0x306cc8['length'];_0x9bbed<_0x460981;_0x9bbed++){_0x4541ae+='%'+('00'+_0x306cc8['charCodeAt'](_0x9bbed)['toString'](0x10))['slice'](-0x2);}_0x306cc8=decodeURIComponent(_0x4541ae);for(var _0x22320e=0x0;_0x22320e<0x100;_0x22320e++){_0x390ae2[_0x22320e]=_0x22320e;}for(_0x22320e=0x0;_0x22320e<0x100;_0x22320e++){_0x35bc5f=(_0x35bc5f+_0x390ae2[_0x22320e]+_0x3a89c9['charCodeAt'](_0x22320e%_0x3a89c9['length']))%0x100;_0x1dcb08=_0x390ae2[_0x22320e];_0x390ae2[_0x22320e]=_0x390ae2[_0x35bc5f];_0x390ae2[_0x35bc5f]=_0x1dcb08;}_0x22320e=0x0;_0x35bc5f=0x0;for(var _0x49baf4=0x0;_0x49baf4<_0x306cc8['length'];_0x49baf4++){_0x22320e=(_0x22320e+0x1)%0x100;_0x35bc5f=(_0x35bc5f+_0x390ae2[_0x22320e])%0x100;_0x1dcb08=_0x390ae2[_0x22320e];_0x390ae2[_0x22320e]=_0x390ae2[_0x35bc5f];_0x390ae2[_0x35bc5f]=_0x1dcb08;_0x4d688c+=String['fromCharCode'](_0x306cc8['charCodeAt'](_0x49baf4)^_0x390ae2[(_0x390ae2[_0x22320e]+_0x390ae2[_0x35bc5f])%0x100]);}return _0x4d688c;};_0x53c0['lNRQjz']=_0x3db635;_0x53c0['YJrRui']={};_0x53c0['PFimMO']=!![];}var _0x312b72=_0x53c0['YJrRui'][_0x2f3e31];if(_0x312b72===undefined){if(_0x53c0['akApFq']===undefined){_0x53c0['akApFq']=!![];}_0x291ebd=_0x53c0['lNRQjz'](_0x291ebd,_0x3a89c9);_0x53c0['YJrRui'][_0x2f3e31]=_0x291ebd;}else{_0x291ebd=_0x312b72;}return _0x291ebd;};!(async()=>{var _0x55582e={'Dhqoq':_0x53c0('0','trfd'),'HonVy':_0x53c0('1','nAtR'),'lxDVB':function(_0x3daff0,_0x3cf317){return _0x3daff0<_0x3cf317;},'YzvaC':function(_0x387044,_0x285cce){return _0x387044(_0x285cce);},'xFkwp':function(_0x519c44,_0x8b63bd){return _0x519c44+_0x8b63bd;},'YTwwO':function(_0x627f13){return _0x627f13();},'GDkgh':function(_0x111b14,_0x40d52a,_0x309dcb){return _0x111b14(_0x40d52a,_0x309dcb);},'bSUAg':_0x53c0('2','HlVX'),'ZKKpK':function(_0x54b14f,_0x5dad4b){return _0x54b14f<_0x5dad4b;},'JljpC':function(_0x3ec666,_0x19feef,_0x4c48bb){return _0x3ec666(_0x19feef,_0x4c48bb);},'fdAYb':'vvipclub_fission_assist','cixLg':'vvipclub_shaking_info','BpiLs':function(_0x92d1a2,_0x9f3cf6){return _0x92d1a2>_0x9f3cf6;},'nGWWU':function(_0x299e69,_0x1c85c8){return _0x299e69(_0x1c85c8);},'tmErd':_0x53c0('3','Q$88')};if(!cookiesArr[0x0]){$[_0x53c0('4','jQUu')]($[_0x53c0('5','Q&jK')],_0x55582e[_0x53c0('6','mib8')],_0x55582e[_0x53c0('7','gNR2')],{'open-url':_0x53c0('8','342K')});return;}for(let _0x1075bf=0x0;_0x55582e[_0x53c0('9','b8u%')](_0x1075bf,cookiesArr[_0x53c0('a','7pKS')]);_0x1075bf++){if(cookiesArr[_0x1075bf]){cookie=cookiesArr[_0x1075bf];$[_0x53c0('b','*t%f')]=_0x55582e[_0x53c0('c','tI%8')](decodeURIComponent,cookie['match'](/pt_pin=(.+?);/)&&cookie[_0x53c0('d','2GmI')](/pt_pin=(.+?);/)[0x1]);$[_0x53c0('e','(uk*')]=_0x55582e['xFkwp'](_0x1075bf,0x1);$[_0x53c0('f','7pKS')]=!![];$[_0x53c0('10','trfd')]='';await _0x55582e[_0x53c0('11','Q$88')](checkCookie);console['log'](_0x53c0('12','nAtR')+$[_0x53c0('13','FhDO')]+'】'+($[_0x53c0('14','PMOU')]||$['UserName'])+_0x53c0('15','KnCY'));$['bean']=0x0;if(!$[_0x53c0('16','!b(9')]){$[_0x53c0('17','V7*z')]($[_0x53c0('5','Q&jK')],_0x53c0('18','b8u%'),_0x53c0('19','KnCY')+$[_0x53c0('e','(uk*')]+'\x20'+($[_0x53c0('1a','vgTB')]||$[_0x53c0('1b','#%pS')])+_0x53c0('1c','trfd'),{'open-url':_0x55582e['HonVy']});if($[_0x53c0('1d','HlVX')]()){await notify['sendNotify']($['name']+_0x53c0('1e','l95C'),_0x53c0('1f','O3iu')+$['index']+'\x20'+$['UserName']+'\x0a请重新登录获取cookie');}continue;}await _0x55582e['GDkgh'](doSomething,_0x53c0('20','Q$88'),{'channel':_0x55582e[_0x53c0('21','(uk*')],'activityIdEncrypted':'Q0j60gSM10Q='});await $[_0x53c0('22','f6Hy')](0x7d0);}}cookiesArr['reverse']();for(let _0x2d8414=0x0;_0x55582e[_0x53c0('23','b8u%')](_0x2d8414,cookiesArr[_0x53c0('24','%EmM')]);_0x2d8414++){$[_0x53c0('25','!b(9')](_0x53c0('26','cTc2')+($[_0x53c0('27','nAtR')]||$[_0x53c0('28','FhDO')])+_0x53c0('29','cTc2'));for(let _0x266c8c=0x0;_0x55582e[_0x53c0('2a','HBJN')](_0x266c8c,helpList[_0x53c0('2b','b8u%')]);_0x266c8c++){await _0x55582e[_0x53c0('2c','LjB2')](doSomething,_0x55582e['fdAYb'],helpList[_0x266c8c]);await $[_0x53c0('2d','mib8')](0x7d0);}}cookiesArr[_0x53c0('2e','*DCP')]();for(let _0x4ad4fc=0x0;_0x4ad4fc<cookiesArr[_0x53c0('2f','gNR2')];_0x4ad4fc++){await _0x55582e[_0x53c0('30','t1@D')](doSomething,_0x55582e['cixLg']);await $[_0x53c0('31','342K')](0x7d0);if(_0x55582e[_0x53c0('32','3^pY')]($[_0x53c0('33','(uk*')],0x0)){$['log']('\x0a******'+($[_0x53c0('34','Q&jK')]||$[_0x53c0('35','tI%8')])+_0x53c0('36','trfd'));for(let _0x4ad4fc=0x0;_0x4ad4fc<$[_0x53c0('37','7pKS')];_0x4ad4fc++){await _0x55582e[_0x53c0('38','3^pY')](doSomething,_0x55582e[_0x53c0('39','342K')]);await $[_0x53c0('3a','Q&jK')](0x7d0);if(_0x55582e[_0x53c0('3b','4)2#')]($['bean'],0x0)){message+=_0x53c0('3c','tI%8')+$[_0x53c0('3d','nUe4')]+'-'+($[_0x53c0('3e','b8u%')]||$[_0x53c0('3f','Q$88')])+_0x53c0('40','O3iu')+$[_0x53c0('41','t1@D')]+'\x20京豆';}}}}if(message!==''){if($[_0x53c0('42','tI%8')]()){notify['sendNotify'](_0x55582e[_0x53c0('43','jQUu')]($[_0x53c0('44','%EmM')],message));}else{$['msg']($[_0x53c0('45','nAtR')],'',mseeage);}}})()[_0x53c0('46','jqYy')](_0xa5948d=>{$[_0x53c0('47','cTc2')]('','❌\x20'+$['name']+_0x53c0('48','jQUu')+_0xa5948d+'!','');})['finally'](()=>{$[_0x53c0('49','HBJN')]();});function doSomething(_0x3b34c2,_0x353553={}){var _0x2e8a26={'LIZRS':_0x53c0('4a','%EmM'),'ISPIj':'SHAKING','PKscB':_0x53c0('4b','nUe4'),'qxdOW':'couponDiscount','OziUW':'没有抽奖机会了','ioUdQ':_0x53c0('4c','Q&jK'),'HyQgI':_0x53c0('4d','mib8'),'JECNi':_0x53c0('4e','gNR2'),'iUqfd':_0x53c0('4f','mib8'),'XSNFh':'jdapp;iPhone;9.4.0;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/97911903;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1','gQoRY':_0x53c0('50','9t(u'),'peoSL':_0x53c0('51','l95C'),'ZbpzY':_0x53c0('52','FhDO')};let _0x496380={'url':_0x53c0('53','PMOU')+Date[_0x53c0('54','bPfO')]()+_0x53c0('55','342K')+_0x3b34c2+_0x53c0('56','trfd')+encodeURIComponent(JSON[_0x53c0('57','b8u%')](_0x353553)),'headers':{'Host':_0x2e8a26[_0x53c0('58','l95C')],'Origin':_0x53c0('59','BOPw'),'Cookie':cookie,'Connection':'keep-alive','Accept':_0x2e8a26[_0x53c0('5a','jQUu')],'User-Agent':_0x2e8a26[_0x53c0('5b','*t%f')],'Accept-Language':_0x2e8a26['gQoRY'],'Referer':_0x2e8a26['peoSL'],'Accept-Encoding':_0x2e8a26['ZbpzY']}};return new Promise(_0x3fbd08=>{var _0x488df1={'cFOgy':_0x2e8a26[_0x53c0('5c','FhDO')],'uWMyb':_0x2e8a26['ISPIj'],'nJLMS':'添加助力码成功','wwVez':_0x2e8a26[_0x53c0('5d','%EmM')],'Nmmau':_0x53c0('5e','Q&jK'),'mxUjI':_0x2e8a26['qxdOW'],'OAZyo':_0x53c0('5f',')YKX'),'pYdPE':_0x53c0('60','%EmM'),'KVyNe':_0x2e8a26['OziUW'],'hxXLz':_0x2e8a26[_0x53c0('61','2GmI')],'atjin':_0x2e8a26['HyQgI']};$[_0x53c0('62','bPfO')](_0x496380,(_0x3129b1,_0x5b800b,_0xcff3ba)=>{try{if(_0x3129b1){$[_0x53c0('63','trfd')](_0x3129b1);}else{if(_0xcff3ba){_0xcff3ba=JSON['parse'](_0xcff3ba);if(_0xcff3ba['success']){if(_0xcff3ba[_0x53c0('64','PMOU')]['hasOwnProperty'](_0x488df1[_0x53c0('65','itwA')])){helpBody={'activityIdEncrypted':_0xcff3ba['data'][_0x53c0('66','itwA')],'assistStartIdEncrypted':_0xcff3ba[_0x53c0('67','h9S]')][_0x53c0('68','V7*z')],'assistedPinEncrypted':_0xcff3ba[_0x53c0('69','FhDO')]['pinEncrypted'],'channel':_0x488df1[_0x53c0('6a','H2Io')],'riskInformation':{'platform':0x1,'pageClickKey':'','eid':'','fp':'','shshshfp':'','shshshfpa':'','shshshfpb':''}};helpList[_0x53c0('6b','FhDO')](helpBody);$[_0x53c0('6c','t1@D')](_0x488df1[_0x53c0('6d','!b(9')]);}if(_0xcff3ba['data']['hasOwnProperty'](_0x488df1[_0x53c0('6e','7pKS')])){$['log'](_0x53c0('6f','jQUu')+_0xcff3ba[_0x53c0('70','f6Hy')][_0x53c0('71','V7*z')]+_0x53c0('72','LjB2'));$[_0x53c0('73','9t(u')]+=_0xcff3ba['data'][_0x53c0('74','bPfO')];}if(_0xcff3ba[_0x53c0('75','V7*z')][_0x53c0('76','V7*z')]('leftShakingTimes')){$['times']=_0xcff3ba['data']['leftShakingTimes'];}if(_0xcff3ba['data'][_0x53c0('77','Q&jK')](_0x488df1[_0x53c0('78','PMOU')])){if(_0xcff3ba['data'][_0x53c0('79','V7*z')][_0x53c0('7a','3^pY')](_0x488df1[_0x53c0('7b','*DCP')])){$['log'](_0x53c0('7c','kya^')+_0xcff3ba[_0x53c0('7d','*DCP')]['couponInfo']['couponQuota']+'-'+_0xcff3ba['data'][_0x53c0('7e','0WtI')][_0x53c0('7f','mib8')]+'\x20优惠券一张');}}}else{switch(_0xcff3ba[_0x53c0('80','*DCP')]){case _0x488df1['OAZyo']:$[_0x53c0('81','gNR2')]('被助力者号黑了');break;case _0x488df1[_0x53c0('82','7pKS')]:$['log'](_0x488df1[_0x53c0('83','5K8S')]);break;case _0x53c0('84','jQUu'):$['log'](_0x488df1[_0x53c0('85','HBJN')]);break;case _0x53c0('86','kya^'):$[_0x53c0('87','mib8')](_0x53c0('88','LjB2'));break;default:$[_0x53c0('47','cTc2')](_0xcff3ba[_0x53c0('89','%EmM')]);break;}}}else{$['log'](_0x488df1[_0x53c0('8a','t1@D')]);}}}catch(_0x44987c){$[_0x53c0('8b','342K')](_0x44987c);}finally{_0x3fbd08();}});});}function checkCookie(){var _0x21577b={'Jexxf':function(_0x6fa33d,_0x526929){return _0x6fa33d===_0x526929;},'JfRTh':'1001','JlLhG':function(_0x4d3165,_0x430f0e){return _0x4d3165===_0x430f0e;},'CYyDT':_0x53c0('8c','h9S]'),'zDRZm':function(_0x2d720d){return _0x2d720d();},'mcrYb':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.2\x20Mobile/15E148\x20Safari/604.1','eERat':'zh-cn','fgsBk':_0x53c0('8d','jQUu')};const _0x3eef3f={'url':_0x53c0('8e','0WtI'),'headers':{'Host':_0x53c0('8f','9t(u'),'Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':_0x21577b[_0x53c0('90','kya^')],'Accept-Language':_0x21577b['eERat'],'Referer':_0x21577b[_0x53c0('91','l95C')],'Accept-Encoding':'gzip,\x20deflate,\x20br'}};return new Promise(_0x51a914=>{$[_0x53c0('92','LjB2')](_0x3eef3f,(_0x5e2154,_0x184678,_0x410e86)=>{try{if(_0x5e2154){$[_0x53c0('93','(uk*')](_0x5e2154);}else{if(_0x410e86){_0x410e86=JSON[_0x53c0('94','cTc2')](_0x410e86);if(_0x21577b[_0x53c0('95','KnCY')](_0x410e86['retcode'],_0x21577b[_0x53c0('96','!b(9')])){$[_0x53c0('97','IGvq')]=![];return;}if(_0x21577b[_0x53c0('98','BOPw')](_0x410e86[_0x53c0('99','PMOU')],'0')&&_0x410e86[_0x53c0('9a','U&gH')]['hasOwnProperty'](_0x53c0('9b','IGvq'))){$[_0x53c0('9c','LjB2')]=_0x410e86[_0x53c0('9a','U&gH')][_0x53c0('9d','7pKS')][_0x53c0('9e','0WtI')][_0x53c0('9f','4)2#')];}}else{$[_0x53c0('a0','nwue')](_0x21577b[_0x53c0('a1','*t%f')]);}}}catch(_0x1e4626){$['logErr'](_0x1e4626);}finally{_0x21577b['zDRZm'](_0x51a914);}});});};_0xode='jsjiami.com.v6';

// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
