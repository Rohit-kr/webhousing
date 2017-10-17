const webdriver = require ('selenium-webdriver');
var firefox = require ('selenium-webdriver/firefox');

var driver = new webdriver.Builder()
.forBrowser ('firefox')
.build();

/*Open website */
driver.get("https://www.housing.com");
console.log('launched housing');

/*select any city*/
var cityselect = driver.findElement(webdriver.By.xpath(".//*[@id='header']/header/div[1]/div[2]/div/div/span/a[3]/span/span[1]")).click();
console.log('city hyb');

/*click on searchbar*/
var searchbar = driver.findElement(webdriver.By.xpath(".//*[@id='home-page']/div/div[2]/div[1]/div/div/div/div[1]/div/span")).click();
console.log('srchbar');


/*enter / type locality name*/
/*var enterlocalityname = driver.findElement(webdriver.By.className("placeholder")).click();
console.log('type locality');*/







/*driver.close();*/
