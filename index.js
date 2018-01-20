const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element){
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(array, element){
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten(array, element){
  kittens.pop()
  return kittens
}
