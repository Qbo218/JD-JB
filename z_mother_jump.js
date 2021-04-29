/*
母婴-跳一跳
活动入口: 首页-母婴馆-跳一跳

新手写脚本，难免有bug，能用且用。

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#母婴-跳一跳
5 8,14,20 * 4 * https://share.r2ray.com/dust/i-chenzhe/z_mother_jump.js, tag=母婴-跳一跳, enabled=true
================Loon==============
[Script]
cron "5 8,14,20 * 4 *" script-path=https://share.r2ray.com/dust/i-chenzhe/z_mother_jump.js,tag=母婴-跳一跳
===============Surge=================
母婴-跳一跳 = type=cron,cronexp="5 8,14,20 * 4 *",wake-system=1,timeout=3600,script-path=https://share.r2ray.com/dust/i-chenzhe/z_mother_jump.js
============小火箭=========
母婴-跳一跳 = type=cron,script-path=https://share.r2ray.com/dust/i-chenzhe/z_mother_jump.js, cronexpr="5 8,14,20 * 4 *", timeout=3600, enable=true
*/
const $ = new Env('母婴跳一跳');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
const path = $.isNode() ? require('path') : '';
let cookiesArr = [], cookie = '', message = '';
let helpAuthor = false;//为作者助力的开关
     var _0xodV='jsjiami.com.v6',_0x2084=[_0xodV,'w4DCoTJBXg==','5by55bmh77+X','w6EMFsOZV8OGw4bCpsOP','wovCl340Bw==','wpUnw6Z8TEQccA==','wrjCmMOLImg=','woTDkHkaw7M=','wozDt04n','55WY5oul5Lya5oKf6IyL5Yyp5oio5YiqIOaurui/tzU=','w4rCn8KEdXQOw7HDjg==','RsK5NQMswotQwok=','MeW9meWkhmU=','XsODwrbDiUw5wrLCu8ODwp0nNMO+UWPDi8O5w4c=','w59AIMKG','COi0o+S5lui2m2jlvrnlibDkvqHnvpzvvJRz','a8OqVMK5csKxTUM=','PVkZMsKuw41zSnnDmn0ow4d8','c8OiYcOsw6jCs8KPFw==','w5vDrlLDnUAOwqZF','UyLCucOCcsOtVcKh','dcOCCz1aw7k/XBnDgMOaQ8KJw7M=','KMKLwovClcOl','w44cw5jDu0k=','w7TDgh4=','6aCL5Y2F5out5Ymd77+c6K6A6L2U5Zivw7lSw7Pmnrvnn73kuqTosKXlpY/liKDjg4U=','w6N2EcOBcw==','BFXDqDLDvsO1WEE=','w7IdPsOVHQYxw7M=','w7XDnh4=','w5wVP8OJFA==','TzrCnBxz','woZCDsOH','w5PDgjFpDg==','wpXDt0o2','QSPCtcOUb8O6Q8Kr','w63Di2HDnF4=','w4TDtsOd','w74Uw7LDv1U=','wp/CrcKPbsKm','w5rDtsObMj3CnFbClGZLWsK6w4M=','w7XDlBdrNsOY','SyzCvi0=','STbCrCF9YMOEw7A/wr9jwphN','wqnCgcOhDVREwq1tw5w=','Ak3DuA==','OlTDs8KZ','w5nDjsOCBRo=','wo7DuUQ=','w7PCs8KeDcKh','5b+85aeb5oqt5b6N','w5LCicKFbl4Jw7nDhA==','wpbDpi/Ck1XCrx1j','w4U1KMOjwobDs8KHeMOx','bcOyRA==','XGjCsXPDk8KLZlTClcOt','w5bDjEfCp8K4','w5U7LsOz','WsOIUMKPag==','wrVkwrI8wpHDqhF9KFnDvg==','w7wuBg==','XxjChsOxcg==','P8KmwrHCl8OF','wq/DlX9u','OsKhwrPClcOw','wqdWwrQxwrw=','5b6P5bqr77+n','wp7DsTnClUTChRxiPg==','6aKY5Y2P5oih5YmU77y36Kyo6L+/5ZuyT8OtV+afuuedjeS4oeizn+WnsuWKlOOBhA==','GcKhwrXCn8OYwpo=','M18M','wqkFw6dAQQ==','QGpMMcOk','XsOOwohZ','w5bDim7CrsKN','wpbDuHVfw6s=','fcOcwp7DvXw=','wp7Cu8OvPkM=','w4HCoxbDvMK+WsKow7XDv2o5RldZ','w5o9J8OfNg==','XMO2U8Orw5M=','w49cDsO6','w4kDwoMfw4s=','wpDDsMOrwobDqQ==','wrbCqm8lDg==','PGseFcKs','w7XCvMK6NMKx','w5PDqFbDvX4Z','SgHCpQZR','w51qw7bCn08=','a0XCoVXDlA==','w441IMOCwofDiA==','5b+a5bqM77yM','EGAIBcKu','eGJTPsOo','wpvDhcOVwoDDjVJIEsOh','w4Z7CMOqY2XCjQ==','w4lEB8KJw4k=','wpYzw5VDUg==','KsOMBw==','w4w7RMOaOcOmUhFv','54CIK+W8nuWKruaiv+aVvA==','w73DkA1t','w7DCicKmBcKfw6TDijU=','WnnCrH7DrMKMdEI=','w7czCHnDux0vGw==','5p2w6LyD6Lyr6KK86IyL5b2o5Lud5Lq+5aWa5Yi977yjBQ==','w6nDssKJwqPCow==','w4zDuMOONww=','w7vDssKRwrfCtQ==','wojkuLXos7xc','w5IWRsOLCA==','w5lhDMOMdGQ=','LVUmBcK4','J2sjA8KF','w4RkLMObdg==','fMOhQ8Omw5M=','wprDssOTwr/DmA==','eMOGOide','w4FSw4PCp3E=','wqHDrlhjw4E=','w5vCnMOjwrzCpUsqwps3','w4zCh8KU','LFbDrsKEYjwlwqbDsX8=','wrfChMONK0M=','w6nCqcKTamc=','woZgLMOMw64=','csO2Vg==','6aKA5Y2H5oiU5YiB776t6Kyq6Ly95ZqmEUAv5pyQ556u5Lm86LKW5aa/5YiT44C8','c8OqVg==','w5PDgmPChMK1','5b6U5bmM772H','NcOXEsKVIR04XcKn','w4FAP8KQw6Y=','w4DCvATDn8Ks','w6M0An7DlwA6','w7rDi1DCgcKM','IVrDvQ==','wpB/DMOxw64d','JsOJwrRhw4s=','UcKTABsB','w45cEcO/w78=','w6XDrMOvORw=','wpLDuWIYw7U=','wpRkH8OEw69Vw6DDmnnDi34Qw6goMknCmUjCimlDYMK3OmdGw47DvWwsAhPDqCrDrEcj','wopkKcOBw7Q=','wpjDk2XCs8Ktwq/DgnfCr8KpwpDDh0s=','w4QgHMOlaA==','w7QXKcOmGA==','5b+T5bi577+b','w7hQw6DCuVDCkMKeXMOg','w5jCuMOjwq3CpA==','woDCgcOBA04=','5p6r6L6B6L2N6KO76I6R5b+Y5LqV5Lmf5aSn5Yid77+zAg==','w73DkA1tMQ==','HSbDpQ==','w7IVKcORIg==','S2rCqW/DgA==','HeS6p+iygxA=','w4AawqIew5g=','ZMOQwqnDo10=','wqbDhWsKw5k=','w47Cr8KmGcKZ','TcOOwpVMw7A=','eMOwXcK/XsKt','w5smRsOLDA==','IMOKDMKIKgg=','w6AXBcOUZsODw4PCr8OVRQ==','w5NUK8KFw5dtw79F','w6VALsObw7PDgw==','w4rCqQU=','ZcOCGixaw6Q4','w5UJwqICw48xNsOwbivDoXw=','R1nCoGk=','dsOwdsOtw4Q=','w74XA8O1S8OT','amjCoUjDpA==','w5ELwqABw5QfMsO3dCXDqDZuwrfCj2w=','w5g9VMOL','w4hLw73Cu1fCksKEcMOd','wr7Dlw/Cjlo=','w41Iw77CvHc=','wr/DlwkxZMOVdl/DlQ==','w5MuDnbDmxYDMMK5','w7UUFGXDlw==','RcKgHAIh','NG7DozrDgA==','w5bCrsKkJcKU','w4U/Mw==','AmvDrAzDnQ==','5b+P5buT77+F','w5vDrcOIPxHCl1DCkXQ=','w5I7NcO0wpA=','aVJCLMOu','w4l0McOZwonCo8KXwo06','NWLDr8KkUQ==','W8ONdcK/Vw==','5pGh5Ymh5Lma','w73DmBppEsOfdlXCnA==','54CRwpPlv6nliJvmoYPmloA=','wobDt1cj','w4wiw7TDk28hFjs=','w4UoLsOjwrzDlMKPcQ==','wp/Doj/Cmw==','w5cJwrkJw7QSNcOs','WG1iIcOw','w4J8w5/CkUY=','w6RzIsK5w4s=','w4rCqQXDu8KpSQ==','w4tjN8OSwprClMKZ','w5sxw6/DhEM=','w487Nw==','w7TClMKgCsK/w68=','RsOTwq3DnH8pwqM=','XTDCoTFafg==','w7M7w5jDo2s=','w6bDpkTCtsK0','I2HDscKEXA==','w6XDp8KJwrLCo03Cr8Oew7AXwq0zw5hiBzfDssKoNA==','TsOVwohdwq9tFsKBBgwqw6svV8K0ecKn','X8OlKjpq','WWTCkXvDlsKJ','w48GVsOLHA==','w63CisKnGcK4','wrXCkUsYGg==','w6BOw6LCuFw=','wovDnMOEwqrDqQ==','wpnDoUHChSoOwqlVwoY=','U8OiwqrDjXg=','w4I3w6TDslc=','w7BcIcOMw7PDgsOA','w69GJQ==','XivCvypNQcOOw6AnwpJtwo4=','bcOtQ8KiVcK4QkpX','VjDCrsODXg==','wotxAcOaw7s=','w7zDgwtjMMOzcF/CjQ==','PkDDucKOcSYi'