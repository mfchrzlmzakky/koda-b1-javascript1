let r = 4;
const pi = 3.14;
let luas, keliling;

luas = pi * r * r;
keliling = 2 * pi * r;

if (typeof r === "number") {
  console.log("Luas lingkaran = " + luas);
  console.log("Keliling lingkaran = " + keliling);
} else {
  console.log("Radius harus number");
}

console.log(typeof r);
console.log(typeof pi);
console.log(typeof luas);
console.log(typeof keliling);
console.log(typeof r === "string");
console.log(typeof r === "number");
console.log(typeof r === "boolean");
console.log(typeof r === "undefined");
console.log(typeof r === "null");
console.log(typeof r === "object");
console.log(typeof r === "array");
