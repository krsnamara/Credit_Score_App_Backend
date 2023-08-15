const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InfoSchema = new Schema(
  {
    DOB: { type: String, required: true },
    Delinquency: { type: String, required: true },
    unsecuredLines: { type: Number, required: true },
    ThirtytoFiftyNineDaysPastDue: { type: Number, required: false },
    debtRatio: { type: Number, required: true },
    MonthlyIncome: { type: Number, required: true },
    NumberofOpenCreditLinesandLoans: { type: Number, required: true },
    NumberofTimes90DaysLate: { type: Number, required: false },
    NumberRealEstateLoansOrLines: { type: Number, required: true },
    NumberOfTimeSixtytoEightyNineDaysPastDueNotWorse: {
      type: Number,
      required: false
    },
    NumberOfDependents: { type: Number, required: true },
    uid: String
  },
  {
    timestamps: true
  }
)

const Info = mongoose.model('Info', InfoSchema)

module.exports = Info
