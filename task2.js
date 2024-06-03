const mtk = 80
const bahasaindonesia  = 90
const bahasainggris = 89
const ipa   = 69
const ratarata = (mtk + bahasaindonesia + bahasainggris + ipa) / 4 ;

if (ratarata >= 90){
    console.log("kamu mendapatkan rata-rata =" + ratarata)
    console.log("kamu mendapatkan grade A")
}else if (ratarata >= 80){
    console.log("kamu mendapatkan rata-rata =" + ratarata)
    console.log("kamu mendapatkan grade B") 
}else if (ratarata >= 70){
    console.log("kamu mendapatkan rata-rata =" + ratarata)
    console.log("kamu mendapatkan grade C")
}else if (ratarata >= 60){
    console.log("kamu mendapatkan rata-rata =" + ratarata)
    console.log("kamu mendapatkan grade D")
}else if (ratarata >= 0){
    console.log("kamu mendapatkan rata-rata =" + ratarata)
    console.log("kamu mendapatkan grade E")
}


