import express from 'express'
import cookieParser from 'cookie-parser'
import cookieValidator from './cookie-validator'
const app = express()

// async function validateCookie(req, res, next) {
//     console.log('LOGGED')
//     await cookieValidator(req.cookies)
//     next()
// }

// app.use(cookieParser())
// app.use(validateCookie)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message)
})

app.listen(3000, () => {
    console.log('Example app listen on port 3000')
})