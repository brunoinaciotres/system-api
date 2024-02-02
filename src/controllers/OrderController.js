import { Op } from "sequelize";
import Order from "../../models/Order.js";

const OrderController = {
    insert: async (req, res) => {
        const { name, days, frequency } = req.body

        const newOrder = await Order.create({ name, days, frequency })
        console.log("AQ")
        return res.json(newOrder)
    },

    getAll: async (_req, res) => {
        const orders = await Order.findAll()
        console.log("cheguei aq")
        return res.json(orders)
    },

    getOrdersOfDay: async (_req, res) => {
        const date = new Date()
        const currentDay = date.getDay()

        const orders = await Order.findAll({
            where: {
                days: {
                    [Op.like]: `%${currentDay}%`
                }
            }
        })

        return res.json(orders)
    }
}


export default OrderController;