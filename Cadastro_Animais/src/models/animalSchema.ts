import mongoose, { Schema } from "mongoose";

const animalSchema = new Schema({
nome: {type: String, required: true},
especie: {type: String, required: true},
idade: {type: Number, min: 1, max: 20, required: true},
tutor: {type: String, required: true}
});

const cadastro = mongoose.model('Animal', animalSchema);

export {cadastro};