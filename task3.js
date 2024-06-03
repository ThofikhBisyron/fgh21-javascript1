const printsegitiga = 5
if(typeof printsegitiga !== "number"){
        console.log("data harus number")
    }else{
    for(let numawal = printsegitiga; numawal > 0; numawal--){     
    {
        let text = ""
       for(let i =1; i <= numawal; i++){  
             
             text = text + i + " "
         }
        console.log(text)
    }
}
    }