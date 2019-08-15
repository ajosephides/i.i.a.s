import '../setupTest.js'

describe('I.I.A.S', () => {
  it('the user sees a message that data is being loaded when submit is pressed and before a response is returned', async () => {
    try {
      const browser = await puppeteer.launch({});
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('input[name="ing"]')
      await page.type('input[name="ing"]', 'potatoes');
      await page.click('#add-ingredient');
      await page.type('input[name="ing"]', 'sugar');
      await page.click('#add-ingredient');
      await page.type('input[name="ing"]', 'milk');
      await page.click('#add-ingredient');
      await page.setRequestInterception(true);
      await page.on('request', interceptedRequest => {
        if(interceptedRequest.resourceType(fetch)) {
          interceptedRequest.abort();
        }else{
          interceptedRequest.continue();
        }
      });

      await page.click('input[type="submit"]');

      const pendingDataMessage = await page.evaluate(() => window.find("Please wait while we get the data from our partners....."));
      expect(pendingDataMessage).toBe(true)
      
      await browser.close();

    } catch (error){
      console.log(error)
    }
    
  });
});