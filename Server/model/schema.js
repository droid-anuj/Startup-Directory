const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StartupData = new Schema({
  SNo: { type: Number, required: true },
  Date: { type: String, required: true },
  StartupName: { type: String, required: true },
  IndustryVertical: { type: String, required: true },
  SubVertical: { type: String, required: true },
  CityLocation: { type: String, required: true },
  InvestorsName: { type: String, required: true },
  InvestmentType: { type: String, required: true },
  AmountInUSD: { type: String, required: false },
  Remarks: { type: String, required: false },
}, { collection: "Directories" }); // Specify the collection name here

const StartupDataModel = mongoose.model("StartupData", StartupData);

module.exports = StartupDataModel;
