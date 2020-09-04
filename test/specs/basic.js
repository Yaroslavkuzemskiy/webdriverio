//npx wdio wdio.conf.js
describe('webdriver.io page', () => {
    it('Log in', () => {
        browser.url('https://drewestate-dev.bigdropinc.net/')
        expect(browser).toHaveTitle('DrewEstate - DrewEstate');
        browser.pause(2000);
        const button_21 = $('//*[@id="app"]/div[3]/div/div/div[2]/div/div/div[1]/button[1]')
        button_21.click();
        browser.pause(2000);
        const button_login = $('//*[@id="app"]/div/header/div/button[1]/span')
        button_login.click();
        const email = $('#input-135')
        email.setValue('admin+3@admin.com');
        browser.pause(2000);
        const pwd = $('#input-138')
        pwd.setValue('adminadmin');
        const login = $('//*[@id="app"]/div[3]/div/div/div[2]/div/form/div[4]/button/span')
        login.click();
        browser.pause(5000);
        //const title_activity = $('//h1[text()="Activity"]')
    	//activ = title_activity.isDisplayed();
    	//console.log("Newsfeed - " + activ);
    	//title_activity.saveScreenshot('activity.png');
		
		browser.saveFullPageScreen('activity-1.png');
        // Check a full page screenshot
        expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0);
    })

   
})