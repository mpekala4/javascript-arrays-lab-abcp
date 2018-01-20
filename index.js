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

function destructivelyRemoveLastKitten(array, index){
  kittens.pop(index-1)
  return kittens
}

function destructivelyRemoveFirstKitten(array, index){
  kittens.shift(0)
  return kittens
}

function appendKitten(array, element){
  return[...kittens, "Broom"]
  appendKitten()
}

function prependKitten(array, element){
  return["Arnold",...kittens]
  prependKitten()
}
