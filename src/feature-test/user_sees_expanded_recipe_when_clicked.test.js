import '../setupTest.js'


describe('I.I.A.S', () => {
  it('the user sees expanded recipe when clicking on title', async () => {
    const browser = await puppeteer.launch({
      slowMo: 40,
      // This two lines below allows the dev to see the flow on the chromium page
      headless: false,
      devtools: true
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.type('input[name="ing1"]', 'potatoes');
    await page.type('input[name="ing2"]', 'sugar');
    await page.type('input[name="ing3"]', 'milk');
    await page.setRequestInterception(true);
    await page.on('request', request => {
      var url = request.url();
      if(request.resourceType(fetch)) {
        if (url === 'https://spoon-call.herokuapp.com/ingredients?id=6') {
          request.respond({
            body: JSON.stringify(
              {extendedIngredients: [{id: 1, original: '1 Tbsp butter'}]}
            )
          })
        } else if (url === 'https://spoon-call.herokuapp.com/instructions?id=6') {
          request.respond({
            body: JSON.stringify(
              [{steps: [{number: 1, step: "preheat the oven to 200 C"}]}]
            )
          })
        } else {
            request.respond({
              body: JSON.stringify(
                [{id: 6, title: "Champ (Mashed Potatoes from Ulster)", image: "https://spoonacular.com/recipeImages/697254-312x231.jpg"}]
              )
            })
        }
      }
    });
    await page.click('input[type="submit"]');
    page.on('response', response => { response.body })
    await page.click('a[href="recipe"]')
    const found_instruction = await page.evaluate(() => window.find('preheat the oven to 200 C'));
    expect(found_instruction).toBe(true)
    const found_ingredient = await page.evaluate(() => window.find('1 Tbsp butter'));
    expect(found_ingredient).toBe(true)
    await browser.close();
  },30000);
});
