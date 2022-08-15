import express, { Request, Response } from "express"
require("dotenv").config()
const cors = require("cors")
const data = require("./items.json")

const server = express()
const port = process.env.PORT

server.use(express.json())
server.use(express.static("public"))
server.use(cors())

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

server.post("/create-checkout", async (req: Request, res: Response) => {
   const body = req.body
   let obj: Array<{ name: string; quantity: number; price: number }> = []
   let items

   // If statement to handle items
   if (body[1].soilData.title == null) {
      items = [
         {
            id: body[0].id,
            title: body[0].oxygenData.title,
            quantity: body[0].oxygenData.oxygenQuantity,
            price: body[0].oxygenData.price,
         },
      ]
   } else if (body[0].oxygenData.title == null) {
      items = [
         {
            id: body[1].id,
            title: body[1].soilData.title,
            quantity: body[1].soilData.soilQuantity,
            price: body[1].soilData.price,
         },
      ]
   } else {
      items = [
         {
            id: body[0].id,
            title: body[0].oxygenData.title,
            quantity: body[0].oxygenData.oxygenQuantity,
            price: body[0].oxygenData.price,
         },
         {
            id: body[1].id,
            title: body[1].soilData.title,
            quantity: body[1].soilData.soilQuantity,
            price: body[1].soilData.price,
         },
      ]
   }

   // For loop to reassign items
   for (let i of items) {
      for (let j of data.items) {
         if (i.id == j.id) {
            obj.push({
               name: j.product,
               quantity: Number(i.quantity),
               price: j.priceInCents,
            })
         }
      }
   }

   try {
      // Creating stripe session
      const session = await stripe.checkout.sessions.create({
         payment_method_types: ["card"],
         mode: "payment",
         success_url: `${process.env.SERVER_URL}/#/`,
         cancel_url: `${process.env.SERVER_URL}/#/`,
         line_items: obj.map((item: { name: string; price: number; quantity: number }) => {
            return {
               price_data: {
                  currency: "aud",
                  product_data: {
                     name: item.name,
                  },
                  unit_amount: item.price,
               },
               quantity: item.quantity,
            }
         }),
      })

      res.json(session.url)
   } catch (e) {
      res.status(500).json({ error: e })
   }
})

// Start the express server
server.listen(port || 8080, () => {
   console.log("Backend listening on http://localhost:" + port)
})
