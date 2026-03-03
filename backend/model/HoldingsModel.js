const { model } = require("mongoose");
const { HoldingSchema } = require("../schema/HoldingSchema");

const HoldingsModel = new model("Holding", HoldingSchema); 

module.exports = { HoldingsModel };

