interface Human {
  name: string;
  age: number;
  location: string;
  motor: string;
}

let objectHuman: Human = {
  name: "Daniel",
  age: 19,
  location: "Bandung",
  motor: "Yamaha",
};

function printHuman(human: Human): void {
  console.log(human.location);
}

printHuman(objectHuman);
