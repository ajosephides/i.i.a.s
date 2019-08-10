import '../setupTests.js'
import App from '../App';

describe('I.I.A.S', () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    // jest.setTimeout(30000);
  });

  it('the user can upload recipes inputing ingredients', async () => {
    const browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 20,
      // devtools: true
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.type('input[name="ing1"]', 'potatoes');
    await page.type('input[name="ing2"]', 'sugar');
    await page.type('input[name="ing3"]', 'milk');
    await page.click('input[type="submit"]')
    await page.setRequestInterception(true);

    const responses = {
      "get_saved_posts": {
        status: 200,
        //Body has to be a string
        body: JSON.stringify({
          data: {
          posts: ["post1","post2"]
          }            
        })
      }
    }
    await page.on('request', interceptedRequest => {
      console.log(request)
      const endpoint = interceptedRequest.url.split('/').pop();
      if(responses[endpoint]){
        request.respond(responses[endpoint]);
      }
     })
    //  console.log(document.location)
    // await page.waitForNavigation();
    // await expect(page).toMatch('carrots')
      // const dimensions = await page.evaluate(() => {
      //   return {
      //     width: document.documentElement.clientWidth,
      //     height: document.documentElement.clientHeight,
      //     deviceScaleFactor: window.devicePixelRatio
      //   };
      // });
  });
});

