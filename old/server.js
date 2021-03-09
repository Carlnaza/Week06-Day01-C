const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/foods':
            fs.readFile('./foods.html', 'utf8', (err, data) => {
                if (err) { console.log(err) }

                res.end(data)
            })
            break
        case '/movies':
            fs.readFile('./movies.html', 'utf8', (err, data) => {
                if (err) { console.log(err) }

                res.end(data)
            })
            break
        case '/songs':
            fs.readFile('./songs.html', 'utf8', (err, data) => {
                if (err) { console.log(err) }

                res.end(data)
            })
            break
    }

})


server.listen(3000, () => {
    console.log("Your server is on 3000")
})

