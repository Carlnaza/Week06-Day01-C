const express = require('express')
const app = express()

const users = require('./users.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// GET is you GET back DATA
app.get('/users', (req, res) => {

    res.json({
        status: 200,
        data: users
    })

})

// PUT is you UPDATE DATA
app.put('/users', (req, res) => {
    // console.log(req.body)
    // console.log(req.params)

    //     let users = [
    //         {
    //             name: 'John Doe',
    //             age: 21
    //         },
    //         {
    //             name: 'Jane Doe',
    //             age: 21
    //         }
    //     ]

    // users[].name = req.body.name
    // users[].age = req.body.age

    // res.json({
    //     status: 200,
    //     data: users
    // })


})

// // POST is you CREATE DATA
app.post('/users', (req, res) => {
    
    let newUser = {
        name: req.body.name,
        age: req.body.age
    }

    users.push(newUser)

    res.json({
        status: 200,
        data: users
    })

})

// // DETEL is you DELETE DATA
// app.delete()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})