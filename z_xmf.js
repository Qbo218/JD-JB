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
   var _0xodf='jsjiami.com.v6',_0x310c=[_0xodf,'RDbCkCs=','OMKCPF82','wrbCvcKFwqBHfMOlw4fCsMKI','w5cOEUE=','wo7ClVnDhGvCvsKxw6fDq8KXwqvDuMOXwp8wHkM=','b8KZwo1JwpPDgcOyw4HDmMK0RA3Dow==','dMO3w7Y6EiHDnXXDusKFFB85wqA=','dMKgOMOWN8K0HE3Di8KQ','O8Kxw7vDj13DvDw3bcK2wqfDig==','M1DDrBzDtnU=','w4kMCkRr','IcOAZXsh','w7lsw5xowo1xd3fDoiodW8KRw7XDiWnDosKdbsOBZ3vCrcKmUQ==','wrHCvW52aw==','csKJwoLDv1c=','D8KDw7TDvjg=','OR5EQHE=','IMKvw48+Iw==','bMKkw43DjMKy','fzHDlcKOwps=','DsOVTFQ5','a8KEwp1uwos=','PMKww4gPBg==','wovCu156w4Y=','TcO2wrLDrEg=','w67Cth0=','HWnDuCA=','c8K15aW56LeowpnCg+WMl+WYi8KWGQ==','K17DuA==','wpfComtZw6dTdMKfaA==','QAfDq8KowqQ=','wp5Gw4AKworCmnhJaMO6FXI=','wqzCh8KWw7HDisOh','w4DDmnzCmFzCoA==','wrvDoMKOwrJe','SyHDtsOC','HsO2UngYw7QDWcOW','wrLCjcKRw7DDg8OnwpjDuGLDtRE=','w4Arw5jCqgbCsg==','X2HCssKecAdrI8K4E8Ox','NkTDvhnDi3jDlQY=','5Lq25Lq46LO/','dXHCtmrDscKyIMOha8K4','w7vCtBnCpcKb','QTLCiirDuy0=','ZnbDvsK/ZsO2PzjCpcK7w5c=','woB1Ij3CsENNw7M=','AcOtRw==','w5IKC0BvUA==','K17DqwPDmmPDmDZuwpJ8','5Lmg5Lib6L6j5Zqa5Li+56id5pS35o2n','EzwOTUc=','wrVoPRXDtg==','T8Knwq1ewqA=','wrxjw7Mnwpg=','woh/Gw1B','w5pMwoHDusO3','STbDsMK2wqbDpMK6wqo+ScOGIhEuw7HDisOE','SsONwo7DmUjCl8OFIsK+WMKQw6ANLMO5wo9J','bsOJwoHDhUA=','wp1Two9sw5I=','SR/CjzTDpA==','wpzCnElgw6M=','CSMnZ28=','QsKCwp1GwrE=','wrNaDSvCog==','D8K2JVbDoA==','LVhbwoXCkg==','DXXDtx7DsA==','wqBoEA==','H0F8w4k=','QCPCizbDuT5SdcKz','w7fDmsO1wpfDuWQ=','N8O0O8KCw4/DjcOYwpnDg0kcUcOaNQ==','AMOGdGsM','NcKnDWrDkA==','WhHDncKOwqY=','CcKZD0TDlg==','wqbCqsKZwqJYbQ==','X8KOworDkg==','woBMw4cLwoPCnA==','wpzCtlhGVCVbIHM8dQ==','w7TDisOnwozDoXnDjcOa','5LiN5LmK6LOJ','PcOwKcKjw7nDjsOnwp7Dgk0=','Ry5iw60k','wqPDoMKbwrVPSsOgMcOcQsOh','w4ZswrjDpcO7U8OLw5s=','f2IiIBLClcKFSSI9wo8=','w7B7w54=','w6Rdwp/Dm8Oj','H8OnU2Qaw6c=','WjzDpcKLwrc=','e3vCsEHDgsKt','KWTDkzxN','woN0woM=','6IyA5Y+P5Lii5Yiq5YqY6KGS5oqv5Yi9','HSN6BcOjwpXCisORwobCk8Khw6Q=','woIRcMKmYMOqG3sCw7bDtA==','wpzDmUTDj23CusKgw7LDocKMwqzDnsOd','HzB/cE3DmQ==','QMO7w7rDoHk=','BS1u','QsKbwpXDnlLClcOeJcKk','w5AOCkZm','w7B7w41/wp13a23DrjAxRg==','eihnw6kmIxbDtsKXwr0=','wqPDoMKI','woIfYsK+Rw==','wqIQwot1Gw4UwrwsdjnCug==','wr3DqsKcwrRGTA==','wrjCoMKewqNRa8OIw6DCqMKA','S8KJw6g=','wp1+wpd4w5vDng==','wrhoFjfDjA==','YcKxIsKTCsO1GUXCrMKXUx8=','wpNZw4QSwobCi2BpaMO4Hi7CosKswpoF','IsK9wq84Dw==','wqkFwpZxUlwJwo0jdz3CvUzCl2FqwpE=','wozCom1Aw7oOMsOWcMOBwqfCj3pTVwhIAcOuw73DpMKcbcKmO21hbxrDjGPChMOswobClcK5woVPZAwAGsKNwozDlDk=','w6nDrsKfwrFDXMKkG8OdSsO6wppBwqnCk8OVbT9dwojDs8Oww6jDj0EMfMKJBmc+wr3Co8OOacO3W8K5w6ZcQ1nDpxPDpcOfXsKyQ8Knwo0fw5DDpWtERwJl','PFZLwofCrw==','QcKQBsOHEQ==','w63Di8OywpLDpirClsKMwo7Cs8Oswq3DjcK1wrzDt289MA==','CMKfDUoY','B8OmQWEGwqgDb8OHw7/Cr8KCwqzDgBDDr8OawppYUm3DtMKUFkc5wpXCj8OKw5nCjA3DkmlPw64wwqEiw7fDknHDikl9b3BjwpUVdkEIw6wud8O6IsOYHUzDk23Dq0PCrAsdesO8Mh/DsFzCsX4cwrXDjcOdwonDucKqcMKSQ0DDj3BVHMKywqMDFMK7wpXDlMKHw6ZWdg/CjsOAw78bwosBE8OYw6k3wr7DnzbDj8Ohwr5HwopzDcOsw53DrAHChB3CpHzDkMKDw7XCp1Nmwqw7SMOROVLCvsOQcMKUw5U4wqR+w5LDpcOwwowECcO/wrsZAMKUw64uwqopNsO9wphmwq7DhsK1M1LChD3CqsO/w7zCqMO9X0ddwqTDrElgNzFEw5bCucKVE8KBw6RDc2xAw507McKJw5k0NAnCg8Kmwolaw5/DrwHCkkjCux82BcOGS8KcCFHDvsOywr/CpnHCqHvDkcOMR00hYMKTw7t/cHzCksOFwqxsw79RFmHCpMKSdTofwo0iw6F8w4PCncOeX8O7w59gwoHDvcKMA8KHw69QwqnCuBglwqnCsiAGX8KUNMKeH8KpdMOOPydtwrd5dR45w7Q3w7jDtVtEOm3CtMOXw4nDukXDsggnNMKQe8O9a8KfGcKgR1nDm8OIcULCtcKvPk1tw7PDm24FR8KcYSsCLMOhPUbCmH3CoW5LTMOIa3hOwpZUw5rCmT7Cs8OAw40cfUlOwoDCqw7DjQgTw47Dq2DClCHDtDfCkgnClmLCjsOcw6okC04TwrnCpMKDGsOHw6Zcwq9WbMOKTsODf1YeE2fDq8O8w4YJw6xhwp7Dj8OzMsOkwqbDt3DCicK2IMOewp4SO8Kbd0JJwp3DqGvDjGxSPj0gcMKATcOxOyp7w4TCr8OB','wpzDisKmwodO','wodbw44mDQ==','Ym3DvsK7cMK+aV7Co8OowpbDg8KbfMKEwqfCq2pL','WDLCnC/CujhXesK8WA==','RUTCicKzRA==','woXDlVrDrmY=','KxtqQEo=','WyDDocKKworDvcKQwqo=','amvCscKObQ==','w7fCjCPCjMKy','wpxlbjLCtEMXw6DDncOxQMK2woM=','S8OmVw==','VDvCqcKbwq0=','MMKhw7YrEnDCojXDvcKGMB41w7dbwpnCoSFhw7nCvsOCBCAWwrjCn1rDqxA/woBdW0YGwoTCl8KQw7PDq8Omw7jCgcO6D8O7w4XCqSkbw4ZswrLDuxPChMOJ','OBIycU4zw6jDsR/Dp8Kuw7sWL8KPwovDpsOHwpPDm0oaw45PTMOOw7rCtRTCskxNPUx2wrZVQxbDv8OZKQQ3DWYZw5V4WjjDoU3Dug==','wqXDr8OjwrbDpA==','wr9Gw44XwoPChGAyNMK5QCHDoMK2wqUDwrXCkk8SwpZFJsKkw4IdGmLDlMOEwpYiwpnDocKXDcOVE8KZd8OqCmNdWsOcVMOiw54XwovCs8OoTTfCtcKHwqcrw7JcW8OwLy5JMWw7CjdIw7nDmXXClsOsXXJPwpo/CsOxMnd7P8ObExPCjcO9FcKmHys6w7/DgcKxwr7CmzQNw6pAw4YeaMOIEiRpT8OrwpTCiMKJaVHCocOZw63ChcK8wqrDjiMmw4fDjGrDiRxvZQ==','Eg0uWG8=','Ig4pYHg=','KcO2UGI/','ZsOvwoXDlU4=','L1DDsSfDtg==','wq5Ow6MfHg==','fWbCj1LDow==','wpnCvm5hZw==','wofDosOkwrnDlg==','wotiNydd','RnDDv8KnWg==','woQ7wo9qPQ==','ZXHCo2fDn8K7Kg==','TsKbLMOwEQ==','wqfDlsO7wpDDusKjw5o=','QTLCjTzDuD1e','SjLDsMKZ','LcKmw6cpKCTDq3U=','wpllw48dDwYDw7k=','dCZgw7gKPwnDlw==','bsKoKMOWCcK6HkQ=','woXChMKQwq5N','w6vDk8ONwqrDmw==','RsO6woHDh0DDnF0=','dsKWwotfwoQ=','F2nDoSROw7LDhg==','DSN9Dw==','w5t8wrfDrMO7Ug==','WyPCjS/DpGMUPMKrTcOHwq3CusKRwrEYcMOYwqbDrcKpA8OTwpfChMOkw4fCkcK6wovDhsOwwpTDog==','HcOIREA3','AMKAO2w4','w7zDuGrCj0o=','eWk3JAfDnMKVUCQ0wo7Co1vDt1fDm0fDmcO4IsOIew9ULcKNwpXCnsO4w4nCt8OAwoslwrzDgMOlwqnDlgTCgDc0DmzCqsONw67CtzlvOX/DglbCgC/CnAbCncKWw6vCtsKpKsKXwofDicOgw7cywrfCssOuwr53w7TDlMOUwo0hTsOGIsOzwrrCmMKaIMKBwq/DpRRrb8O0IcO7ImVowpjDujbDnUBuYynDuBM2wrTCpsK/wpDClMOQw63CsELDgMOnfHTDjTkIVcOow4TDrsKwwolaw5jCuwfDmMKBwrp9cMK+wqfCviLCi2nCh8ODJcOqwr0uwok4D0zCm8Omw7TCuEhjw7jCnMOTwrtwEMOawr3CpcKnw77CrDA+wolqa0R5w5IrwqQBwrkpHCnDqcOOKcKiT3JQWMKYRGLCsxppU0YEw6fCtWvDklHDp2LDvw4lwr7Dr0NHw6tiAsKowrPCtRnChMK9w63DoMOmZCYww6F2wpvDq15lwoFTw7/Cv8KHWsKMw53DtcObw6PCisKyw5zCiSDDmBAdD8O9ZBXClV3CqsKYw5jCtsOjHF7CmcOowrXDvHktXFxEfMKqUMOzGQ==','MMKhw7YrEnDCojXDvcOccxY1w7ARw53CpmBvwrnCscKMCzwwwpjDmU3CoT0ywppDEVw9wqzDl8Kjw6zDs8K2w5jCkMO6M8OcworDuhd0wptywqXDrTrDuMK+dMKhw5jDisKMw73CmELCqsOyw6FGwo0PwpZDw5TClMKVwpDDkcKQwr3DmiF3w58Fw7fDocKnw6zCl8OYw5vCk8KmejNcwoBsL8OWw6DCrHXCt8OK','c3XCo2XDt8K6Ow==','w5N4wq3Dqg==','w4lswoV0worCmj4hfMKzwrvDiRlhw5jDkS0aw4PDmMOEKsOPw41pw4YBwo3DiMKc','wqhmAyXDvwIz','KcKNH08=','wpNKw4A3wqs=','w5bDnnvCjA==','MQUycnRN','LMOjPsOOAsKpI0jDocOWBlDCmcK+AEpuwrLDkmHDhsObw43DjcO6w5IYw5RmMsKLw6fDjcKZLUYUBcKxeFNyOsKHw6A=','wr7DisOEwos=','Tj3CknfDvQ==','LsKnw7bDiQU=','BGjDsAbDsg==','ClJ8woDCvg==','wojDusKIwrFM','wqfDrsKBwpFj','A8K4w7PDgzDCplI=','KsKww7Y4Di7DqA==','VzbCjT4=','fiZgw5I0Pz/DisKNwqDDtsKNwo7Ctg==','wpbDu8KMwoNu','KcOUZGUz','wqhlNDfCvA==','McO8K8Kmw7bDgsOlwo4=','wobCt2pVw4Bae8KW','J8KmIXrDtA==','w6PDnGbCiHo=','f2IxEQXClQ==','OxJZAMO9','w47Cgj/DqcOS','wpLCvcKPwrJybMOSw4U=','wo