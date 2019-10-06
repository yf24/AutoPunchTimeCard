module.exports = {
    'Open browser': function(browser) {
        browser
        .url(browser.launchUrl)
    },

    'Sign in': function (browser) {
        let envVariable = browser.globals
        browser
        .waitForElementVisible('body')
        .click('a[id="en"]')
        .setValue('input[id="dept_input"]', envVariable.CompanyID)
        .setValue('input[id="username_input"]', envVariable.EmployeeID)
        .setValue('input[id="password-input"]', envVariable.Password)
        .click('button[id="login-button"]').pause(1200)
        // .pause(5000)
    },
    'Setup timesheet page': function (browser) {
        browser
        .click('a[href="/attendance_record"]').pause(1200)
        .setValue('select[name="table_content_length"]', "100")
        .click('xpath', "//label[contains(text(),'Absent')]").pause(200)
        // .pause(5000)
    },

    'Punch last month': punchLastMonth,
    'Punch this month': punchThisMonth,

    'Close Browser': function (browser) {
        browser.end()
    }

  };

function punchLastMonth(browser) {
    punchInOut(browser, "filiter_before_month")
}
function punchThisMonth(browser) {
    punchInOut(browser, "filiter_month")
}
function punchInOut(browser, monthButtonID) {
    browser.click(`button[id="${monthButtonID}"]`).pause(1200)
    punchIn(browser)
    punchOut(browser)
}

function punchIn(browser) {
    browser
    .elements('xpath', '//i[@id="add"]', function(result) {
        result.value.forEach(function(element){
            let elementID = element.ELEMENT
            browser
            .moveTo(elementID).pause(500)
            .elementIdClick(elementID).pause(1000)
            .waitForElementPresent('div[id="ModalBody"]')
            .click('xpath', "//label[@for='clockin']")
            .setValue('select[name="hour"]', "09")
            .setValue('input[name="remark"]', "Correction").pause(1000)
            .click('button[id="ModalSave"]').pause(300)
            // .click('button[id="ModalClose"]').pause(300)
            .pause(1000)
        })
    })
}
function punchOut(browser) {
    browser
    .click('xpath', "//label[contains(text(),'Missed punch')]")
    .elements('xpath', '//i[@id="add"]', function(result) {
        result.value.forEach(function(element){
            let elementID = element.ELEMENT
            browser
            .elementIdClick(elementID).pause(1000)
            .waitForElementPresent('div[id="ModalBody"]')
            .click('xpath', "//label[@for='clockout']")
            .setValue('select[name="hour"]', "18")
            .setValue('input[name="remark"]', "Correction").pause(1000)
            .click('button[id="ModalSave"]').pause(300)
            // .click('button[id="ModalClose"]').pause(300)
            .pause(1000)
        })
    })
}