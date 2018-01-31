const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {

    // chrome firefox
    let driver = await new Builder().forBrowser('firefox').build();
    // 最大化窗口
    driver.manage().window().maximize();

  try {

       await driver.get('http://localhost:4800/index/index');
       await driver.wait(until.titleIs('点赞--test'), 1000);
       await driver.sleep(1000) 
       await driver.findElement(By.css(" .hand")).click();
       await driver.findElement(By.css(" .hand")).click();
       await driver.findElement(By.css(" .hand")).click();
       let oldnum = await  driver.findElement(By.css(" .count")).getText();
       await driver.findElement(By.css(" .hand")).click();
       let newnum =  await driver.findElement(By.css(" .count")).getText();
       console.log(oldnum!=newnum);
       if(oldnum!=9){
        console.log(oldnum<newnum);
       }else{
         console.log(oldnum>newnum);
       }

  } finally {
    await driver.quit();
  } 
})();