import '../setupTest.js'
import fetch from '../unit-test/mocks/recipeListFetch';

describe('I.I.A.S', () => {
  it('the user can upload recipes inputing ingredients', async () => {
    const browser = await puppeteer.launch({
      slowMo: 40,
      // This two lines below allows the dev to see the flow on the chromium page
      // headless: false,
      // devtools: true
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.type('input[name="ing1"]', 'potatoes');
    await page.type('input[name="ing2"]', 'sugar');
    await page.type('input[name="ing3"]', 'milk');
    await page.setRequestInterception(true);
    await page.on('request', request => {
      if(request.resourceType(fetch)) {
        request.respond({
          body: JSON.stringify(
            [{id: 6, title: "Champ (Mashed Potatoes from Ulster)", image: "https://spoonacular.com/recipeImages/697254-312x231.jpg"}]
          )
        })
      }
    });
    await page.click('input[type="submit"]');
    page.on('response', response => { response.body })
    const found = await page.evaluate(() => window.find("Champ"));
    expect(found).toBe(true)
    await browser.close();
  });
});
