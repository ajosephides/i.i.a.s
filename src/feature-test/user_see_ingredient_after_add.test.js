import '../setupTest.js'

describe('I.I.A.S', () => {
  it('User wants to see what they are about to submit', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('input[name="ing"]')
    await page.type('input[name="ing"]', 'potatoes');
    await page.click('#add-ingredient');
    await page.waitForSelector('li')
    const found = await page.evaluate(() => window.find("potatoes"));
    expect(found).toBe(true)
    await browser.close();
  });
});
