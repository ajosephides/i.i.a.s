import '../setupTest.js'

describe('I.I.A.S', () => {
  it('the user can upload recipes inputing ingredients', async () => {
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
    await page.waitForSelector('img')
    const found = await page.evaluate(() => window.find("Champ"));
    expect(found).toBe(true)
    await browser.close();
  });
});
