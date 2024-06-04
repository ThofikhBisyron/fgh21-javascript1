
const data = {
    id          : 1,
    name        : "leanne Graham",
    username    : "Bret",
    email       : "Sincere@april.biz",
    address     :
    {
        street  : "kulkas Light",
        suite   : "apt. 556",
        city    : "Gwenborough",
        zipcode : "92998-3874",
    },
    phone       : "1-770-736-8031 x56442",
    website     : "hildegard.org",
}
let datar = {
    name        : "Thofikh Bisyron",
    email       : "syaifania.raisya@gmail.com",
    hobby       : "masak",
}
 const {street, city} = data.address;

 const data1 = {...data, ...datar}
 console.log(data1)
 console.log(street)
 console.log(city)

// const data1 = {...data}
 //data1.address.city = "surabaya"
 // console.log(data1)

 //let data1 = {data.address.city : "surabaya"}

 //let data2 = {...data, ...data1}
 //console.log(data2)

//const data1 = {...data, address: (...data.address, city: 'jakarta')}
//console.log{data1}