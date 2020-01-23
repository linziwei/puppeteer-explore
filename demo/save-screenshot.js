/* 
 * 将一个网页截图保存为图片 
 */

 const puppeteer = require('puppeteer');

 const saveScreenshot = async (url, path) => {
     // 启动浏览器
     const browser = await puppeteer.launch({
         // 关闭无头模式,便于观察
         headless: false,
         timeout: 30000
     })
     //打开页面
     const page = await browser.newPage();
     //设置浏览器视窗
     page.setViewport({
         width: 1376,
         height: 768
     });
     // 地址栏输入网页地址
     await page.goto(url);

     await page.screenshot({ path });
     // 关闭浏览器
     await browser.close();
 }

 module.exports = saveScreenshot;

 if (require.main === module) {
     saveScreenshot('https://baidu.com', './baidu.png');
 }