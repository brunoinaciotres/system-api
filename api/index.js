import express from 'express'
import orderRouter from './routes/ordersRouter.js'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(cors())
app.use("/orders", orderRouter)

app.use('/test', (req, res) => {
    res.send("running fine")
})

app.listen(PORT, (req, res) => {
    return console.log("server running on port " + PORT)
})


