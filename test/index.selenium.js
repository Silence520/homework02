const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {

	// chrome firefox
  let driver = await new Builder().forBrowser('firefox').build();
  try {

      await driver.get('http://localhost:4800/index/index');
      await driver.wait(until.titleIs('点赞--test'), 1000);
      await driver.findElement(By.css(" .hand")).click();
      // await driver.findElement(By.css(" .count")).sendKeys('苹果');
      // await driver.findElement(By.css("div#J_selector div.J_selectorLine.s-category div.sl-wrap div.sl-value div.sl-v-list ul.J_valueList li:nth-child(2) a")).click();
      // await driver.findElement(By.css("#J_selector > div:nth-child(3) > div > div.sl-value > div.sl-v-list > ul > li:nth-child(2) > a")).click();
      // await driver.findElement(By.css("#J_filter > div.f-line.top > div.f-sort > a:nth-child(5) > span")).click();
      // await driver.findElement(By.css(" #J_feature > ul > li:nth-child(3) > a")).click();





  } finally {
    // await driver.quit();
  }
})();