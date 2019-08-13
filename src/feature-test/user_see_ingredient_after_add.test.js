import '../setupTest.js'

describe('I.I.A.S', () => {
  it('User wants to see what they are about to submit', async () => {
    jest.setTimeout(10000)
    const browser = await puppeteer.launch({
      // This two lines below allows the dev to see the flow on the chromium page
      // slowMo: 40,
      // headless: false,
      // devtools: true
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.type('input[name="ing"]', 'potatoes');
    await page.click('#add-button');
    const found = await page.evaluate(() => window.find("potatoes"));
    expect(found).toBe(true)
    await browser.close();
  });
});