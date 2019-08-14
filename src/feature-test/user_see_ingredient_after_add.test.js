import '../setupTest.js'

xdescribe('I.I.A.S', () => {
  it('User wants to see what they are about to submit', async () => {
    const browser = await puppeteer.launch({
      // This two lines below allows the dev to see the flow on the chromium page
      // slowMo: 40,
      // headless: false,
      // devtools: true
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('input[name="ing"]')
    await page.type('input[name="ing"]', 'potatoes');
    await page.click('#add-button');
    await page.waitForSelector('div[id="ing-list"]')
    const found = await page.evaluate(() => window.find("x potatoes"));
    expect(found).toBe(true)
    await browser.close();
  });
});