let matriz1 = [
  [1,2,3],
  [4,5,6],

]

let matriz2 = [
  [2,3,4],
  [5,6,7],

]

let matriz3 = [];


for (let i = 0; i < matriz1.length; i++) {
  matriz3[i] = [];
  for (let j = 0; j < matriz1[i].length; j++) {
    matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
  }
}

console.log(matriz3);


