const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema(
  {
    DOB: { type: String },
    Delinquency: { type: String },
    HomeOwnership: { type: String },
    unsecuredLines: { type: Number },
    ThirtytoFiftyNineDaysPastDue: { type: Number },
    MonthlyExpenses: { type: Number },
    MonthlyIncome: { type: Number },
    NumberofOpenCreditLinesandLoans: { type: Number },
    NumberofTimes90DaysLate: { type: Number },
    NumberRealEstateLoansOrLines: { type: Number },
    NumberOfTimeSixtytoEightyNineDaysPastDueNotWorse: {
      type: Number,
    },
    NumberOfDependents: { type: Number },
    Score: { type: Number },
    uid: String,
  },
  {
    timestamps: true,
  }
);

const Info = mongoose.model('Info', InfoSchema);

module.exports = Info;
