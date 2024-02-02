import app from '../api'
import cors from 'cors'

const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(cors())


// app.listen(PORT, (req, res) => {
//     return console.log("server running on port " + PORT)
// })



