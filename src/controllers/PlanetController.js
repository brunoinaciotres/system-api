
import Planet from "../../models/Planet.js"

const PlanetController = {}

PlanetController.save = async (req,res) => {
    const {name, position} = req.body

    const newPlanet = await Planet.create({name, position})
    console.log("to aqui papae")

   
    return res.json(newPlanet)
    
}

export default PlanetController