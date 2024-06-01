
let data = {
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
let {street, city} = data.address;

let data1 = {...data, ...datar}
console.log(data1)
console.log(street)
console.log(city)