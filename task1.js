const biodata = {
    nama : "Thofikh Bisyron Taqiyudin",
    umur : 25,
    hobi : ["masak", " musikan"],
    status : false,  
    daftarsekolah : [
    {
        namasekolah : "SMP 1 Gemolong",
        tahunmasuk  : 2011,
        tahunkeluar : 2014,
        jurusan  : bawah,
    },{
        namasekolah   : "SMA 1 Sumberlawang",
        tahunmasuk    : 2014,
        tahunkeluar   : 2017,
        jurusan       : "ipa",
    }
    ],
    bakat : [
    {
        namabakat   : "lari",
        level       : ["noob", "menengah", "pro" ],
    },{
        namabakat   : "lempar",
        level       : ["noob", "menengah", "pro"],
    }
    ],
    tertarikkoding : true
    }

console.log("nama =" + biodata.nama)
console.log("Umur =" + biodata.umur)
console.log("hobi =" + biodata.hobi)
if (biodata.status == false){
    console.log("status = belum menikah");
}else{
    console.log("status = udah menikah")
}
console.log("bakat =" + biodata.bakat[0].namabakat + " berlevel " + biodata.bakat[0].level[2])
console.log("bakat 2 =" + biodata.bakat[1].namabakat + " berlevel " + biodata.bakat[0].level[2])

console.log("daftar sekolah =" + biodata.daftarsekolah[0].namasekolah);
console.log("daftar sekolah 2 =" + biodata.daftarsekolah[1].namasekolah);
if (biodata.tertarikkoding == true){
    console.log("tertarik koding = ya tertarik");
}else{
    console.log("tertarik koding = tidak tertarik")
}