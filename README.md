``` mermaid
flowchart TB
start((start))
inputa[/Nilai r/]
check1{r % 7 = 0?}
inputb[/Nilai pi = 22/7/]
inputc[/Nilai pi = 3.14/]
check2{Hitung Luas?}
output1[/Hasil Luas/]
output2[/Hasil Keliling/]
selesai(((end)))
start --> inputa
inputa --> check1
check1 -- Ya --> inputb
check1 -- Tidak --> inputc
inputb --> check2
inputc --> check2
check2 -- Ya --> output1
check2 -- Tidak --> output2
output1 --> selesai
output2 --> selesai
```