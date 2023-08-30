// variavel
const numero = 10;
numero = 20; // erro

const frutas = [];
frutas.push("bananas");

const pessoa = { id: 1, nome: "jose" };
pessoa.sexo = "M";
pessoa = { id: 2, nome: "Maria" };

let cont = 0;

// funcoes
const soma = (a, b) => a + b;

function App() {
  return <View></View>;
}

const App = () => {
  return <View></View>;
};

// propagacao e desestruturacao
frutas.push(...["uva", "maca"]);
["banana", "uva", "maca"];

//desestruturacao
const { id, nome } = pessoa;

// modulos
export default pessoa;

export { frutas, soma };

import pessoa from "revisao";

import { frutas } from "revisao";

import { View } from "react-native";
