//npx wdio wdio.conf.js --spec=drew
//npm run de
describe('webdriver.io page', () => {
    it('Log in', () => {
        browser.url('/')
		browser.setWindowSize(375, 812)
        expect(browser).toHaveTitle('DrewEstate - DrewEstate');
        browser.pause(2000);
		})
		it('Pop-up', () => {
        const button_21  = $('//*[@id="app"]/div[3]/div/div/div[2]/div/div/div[1]/button[1]/span')
		browser.pause(5000);
		browser.saveScreen('pop_up-mobile.png');
		expect(browser.checkScreen('pop_up-mobile.png', { /* some options */ })).toEqual(0);
        button_21.click();
        browser.pause(2000);
		})
		it('profile', () => {
        const button_login = $('//*[@id="app"]/div/header/div/button[1]')
        button_login.click();
        const email = $('#input-135')
        email.setValue('yaroslav.kuzemskiy+1@bigdropinc.com');
        browser.pause(2000);
        const pwd = $('#input-138')
        pwd.setValue('12345678');
        const login = $('//*[@id="app"]/div[3]/div/div/div[2]/div/form/div[4]/button')
        login.click();
        browser.pause(5000);
        //const title_activity = $('//h1[text()="Activity"]')
    	//activ = title_activity.isDisplayed();
    	//console.log("Newsfeed - " + activ);
    	//title_activity.saveScreenshot('activity.png');
		const icon = $('//*[@id="app"]/div/header/div/button[3]')
		icon.click();
		const acc = $('//*[@id="app"]/div/header/div/div[4]/div/a[1]')
		acc.click();
		browser.saveFullPageScreen('profile-mobile.png');
        // Check a full page screenshot
        expect(browser.checkFullPageScreen('profile-mobile.png', {
        hideAfterFirstScroll: [
                $('//*[@id="app"]/div/header'),
              ],
        fullPageScrollTimeout: 4000, 
        })).toEqual(0);
		browser.pause(2000);
		
    })

  
})

