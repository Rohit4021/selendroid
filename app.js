const { Browser } = require('selenium-wrapper-ed')
const express = require('express')
const app = express()

const automate = async () => {
    await Browser.openPage('https://app.resemble.ai')
}

app.get('/', (req, res) => {
    automate()
})

app.listen(process.env.PORT)
