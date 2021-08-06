const argv = require('minimist')(process.argv.slice(2), { 
    boolean: 'observe',
    default: { observe: false }
});
const ora = require('ora');
const { chromium } = require('playwright');

const PunchType = {
    in: "in",
    out: "out"
};

(async () => {
    var spinner = ora('Processing......').start();
    const browser = await chromium.launch({
        headless: !argv.observe // if dev -> set false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://cloud.nueip.com/login");
    // Switch lang
    spinner.text = "Login now......";
    await page.click("div .lang-dropdown");
    await page.click("id=en");
    // Login
    await page.fill("id=dept_input", "nextdrive");
    await page.fill("id=username_input", argv.id);
    await page.fill("id=password-input", argv.password);
    await page.click("id=login-button");
    spinner.succeed("Login success");
    // Set seaching time
    spinner = ora("Peparing to punch card......").start();
    await page.goto("https://cloud.nueip.com/attendance_record");
    const currentYear = new Date().getFullYear()
    await page.evaluate(() => document.getElementById("date_start").value = "");
    await page.fill("id=date_start", `${currentYear}-01-01`);
    await page.evaluate(() => document.getElementById("date_end").value = "");
    await page.fill("id=date_end", `${currentYear}-12-31`);
    await page.click("id=filter");
    // Prepare results
    await page.selectOption("select[name='table_content_length']", "100");
    await page.fill("[placeholder='Search by keywords']", "Absent");
    spinner.succeed("Ready to work");
    // Punch in/out
    spinner = ora("Starting punch in......").start();
    await punchTimeCard(page, PunchType.in, function(times) {
        spinner.succeed(`Punch in finished (${times} times)`);
    });
    spinner = ora("Starting punch out......").start();
    await punchTimeCard(page, PunchType.out, function(times) {
        spinner.succeed(`Punch out finished (${times} times)`);
    });
    // Close
    spinner = ora("Closing......").start();
    await context.close();
    await browser.close();
    spinner.succeed("QUEST COMPLETE");
})();

/**
 * @param {Page} page The page object
 * @param {PunchType} punchType The type of punch
 */
async function punchTimeCard(page, punchType, callback) {
    var isIn = (punchType == PunchType.in)
    if (!isIn) { await page.click("text=Missed punch"); }
  
    var times = 0
    var add = await page.$('#add')
    while(add) {
        ++times;
        try {
            await add.click()
            await page.check(isIn ? "id=clockinSection" : "id=clockoutSection");
            await page.selectOption("#correctionTime >> select[name='hour']", isIn ? "09" : "18");
            await page.fill("input:near(#correctionCount)", "REMARK");
            await page.click("text=Confirm");
            if (isIn) { // prevent to click stun
                const close = await page.$("id=close");
                if(close) { await close.click(); }
            }
        } catch(e) {
            add = await page.$('#add')
        }
    }
    callback(times)
}