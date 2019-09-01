module.exports = {
    'Sign in': function (browser) {
        let envVariable = browser.globals
        browser
        .url(browser.launchUrl)
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
        .click('button[id="filiter_month"]').pause(1200)
        .setValue('select[name="table_content_length"]', "100")
        .click('xpath', "//label[contains(text(),'Absent')]").pause(200)
        // .pause(5000)
    },
    'punch in': function (browser) {
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
    },
    'punch out': function (browser) {
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
        .end()  
    }
  };
