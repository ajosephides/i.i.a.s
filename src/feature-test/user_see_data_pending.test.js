import '../setupTest.js'
import { jsxEmptyExpression } from '@babel/types';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

describe('I.I.A.S', () => {
  it('the user sees a message that data is being loaded when submit is pressed and before a response is returned', async () => {
    try {
      const browser = await puppeteer.launch({
      });
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.type('input[name="ing1"]', 'potatoes');
      await page.type('input[name="ing2"]', 'sugar');
      await page.type('input[name="ing3"]', 'milk');
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