const mongoose = require("mongoose");

const adressSchema = new mongoose.Schema({
  cep: String,
  publicPlace: String,
  num: String,
  neighborhood: String,
});

const vehicleSchema = new mongoose.Schema({
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001402/1aa00d9f-7b95-44a2-9032-e08b4e55aeac_edzoyu.jpg",
  },
  value: String,
  brand: String,
  model: String,
  yearModel: Number,
  fuel: String,
  codeFipe: String,
  referenceMonth: String,
  vehicleType: Number,
  fuelAbbreviation: String,
  type: String,
  year: String,
});

const clientSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  phone: String,
  birth_date: String,
  address: {
    type: adressSchema,
  },
  vehicle: {
    type: vehicleSchema,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
