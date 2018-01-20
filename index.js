const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element){
  kittens.push("luna");
  return kittens
}

function destructivelyPrependKitten(array, element){
  kittens.unshift("tuna");
  return kittens
}
