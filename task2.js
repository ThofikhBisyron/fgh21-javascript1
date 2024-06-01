const mtk = 60
const bhsindo  = 100
const bhseng = 40
const ipa   = 30
let i = (mtk + bhsindo + bhseng + ipa) / 4 ;

if (i >= 90){
    console.log("kamu mendapatkan rata-rata =" + i)
    console.log("kamu mendapatkan grade A")
}else if (i >= 80){
    console.log("kamu mendapatkan rata-rata =" + i)
    console.log("kamu mendapatkan grade B")
}else if (i >= 70){
    console.log("kamu mendapatkan rata-rata =" + i)
    console.log("kamu mendapatkan grade C")
}else if (i >= 60){
    console.log("kamu mendapatkan rata-rata =" + i)
    console.log("kamu mendapatkan grade D")
}else if (i >= 0){
    console.log("kamu mendapatkan rata-rata =" + i)
    console.log("kamu mendapatkan grade E")
}


