const webdriver = require ('selenium-webdriver');
var firefox = require ('selenium-webdriver/firefox');

var driver = new webdriver.Builder()
.forBrowser ('firefox')
.build();

/*Open website */
driver.get("https://www.housing.com");
console.log('launched housing');

/*Select Rent service*/
driver.findElement(webdriver.By.className("tag inline rent")).click();
console.log("rent");

/*select a city
driver.findElement(webdriver.By.xpath(".//*[@id='header']/header/div[1]/div[2]/div/div/span/a[3]/span/span[1]")).click();*/
driver.findElement(webdriver.By.className("city-select-image mumbai")).click();
console.log('city Mum');

/*click on searchbox
driver.findElement(webdriver.By.xpath(".//*[@id='home-page']/div/div[2]/div[1]/div/div/div/div[1]/div/span")).click();
console.log('searchbar');*/
driver.findElement(webdriver.By.className("last-search-wrapper")).click();
console.log("searchbox");

/*Select Locality from Popular cities*/
driver.findElement(webdriver.By.className("item")).click();






/*driver.close();*/
