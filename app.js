const http = require('http') 
const { Browser } = require('selenium-wrapper-ed')

const automate = async () => {
    await Browser.openPage('https://app.resemble.ai')
}

const server = http.createServer(function (req, res) {
    http.createServer() 
    res.send('Hi!') 
    automate()
}) 

server.listen(process.env.PORT)  
