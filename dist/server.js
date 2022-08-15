"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const cors = require("cors");
const data = require("./items.json");
const server = (0, express_1.default)();
const port = process.env.PORT;
server.use(express_1.default.json());
server.use(express_1.default.static("public"));
server.use(cors());
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
server.post("/create-checkout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    let obj = [];
    let items;
    // If statement to handle items
    if (body[1].soilData.title == null) {
        items = [
            {
                id: body[0].id,
                title: body[0].oxygenData.title,
                quantity: body[0].oxygenData.oxygenQuantity,
                price: body[0].oxygenData.price,
            },
        ];
    }
    else if (body[0].oxygenData.title == null) {
        items = [
            {
                id: body[1].id,
                title: body[1].soilData.title,
                quantity: body[1].soilData.soilQuantity,
                price: body[1].soilData.price,
            },
        ];
    }
    else {
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
        ];
    }
    // For loop to reassign items
    for (let i of items) {
        for (let j of data.items) {
            if (i.id == j.id) {
                obj.push({
                    name: j.product,
                    quantity: Number(i.quantity),
                    price: j.priceInCents,
                });
            }
        }
    }
    try {
        // Creating stripe session
        const session = yield stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${process.env.SERVER_URL}/#/`,
            cancel_url: `${process.env.SERVER_URL}/#/`,
            line_items: obj.map((item) => {
                return {
                    price_data: {
                        currency: "aud",
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: item.price,
                    },
                    quantity: item.quantity,
                };
            }),
        });
        res.json(session.url);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}));
// Start the express server
server.listen(port || 8080, () => {
    console.log("Backend listening on http://localhost:" + port);
});
