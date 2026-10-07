const mode = "fizzbuzz";

switch (mode) {
  case "fizzbuzz":
    for (let n = 1; n <= 20; n++) {
      if (n % 3 == 0 && n % 5 == 0) {
        console.log("FizzBuzz");
      } else {
        console.log(n);
      }
    }
    break;
  case "odd-even":
    let n = 1;
    while (n <= 10) {
      if (n % 2 == 0) {
        console.log(n + ". Genap");
      } else {
        console.log(n + ". Ganjil");
      }
      n++;
    }
    break;
  case "multiplication":
    let i = 9;
    do {
      let multiplication = 1 + i;
      console.log("1" + " + " + i + " = " + multiplication);

      i--;
    } while (i >= 0);
    break;
  default:
    console.log("Salah pilih bos");
    break;
}
