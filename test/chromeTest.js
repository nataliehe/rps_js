const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('rpsTest', () => {
  let driver = new Builder().forBrowser('chrome').build();

  it('registers player before starting game', async () => {
    await driver.get('file:///Users/student/projects/rps_js/index.html');
    await driver.findElement(By.name('1 player')).click();
    await driver.findElement(By.name('player_1')).sendKeys('Bob');
    await driver.findElement(By.name('Start')).click();
    const text = await driver.getText();
    expect(text).to.have("Bob vs. Computer");
  });

  after(async () => driver.quit());
});



// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('file:///Users/student/projects/rps_js/index.html');
//     text = await driver.findElement(By.tagName("body")).getText();
//     await console.log(text);
//   } finally {
//     await driver.quit();
//   }
// })();
