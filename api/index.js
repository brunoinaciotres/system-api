import express from 'express'
import orderRouter from '../src/routes/ordersRouter.js'
import cors from 'cors'
const app = express()

const PORT = process.env.PORT || 3030

app.use("/", orderRouter)
app.use(express.json())
app.use(cors())

app.listen(PORT, (req, res) => {
    return console.log("server running on port " + PORT)
})

export default app