const { Browser } = require('selenium-wrapper-ed')

const automate = async () => {
    await Browser.openPage('https://app.resemble.ai')
}

automate()
