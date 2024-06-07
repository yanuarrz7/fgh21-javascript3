// program 1
const married = {
    isMarried : true
}

const checkMarried = (dataMarried) =>{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        if (dataMarried === true ){
            reject(new Error("Saya sudah menikah"))
        }else{
            resolve("Saya belum menikah")
        }
    },1000)
})
}

checkMarried(married)
.then(function (hasil) {
    console.log(hasil)
})
.catch(function (error) {
    console.log(error)
})

// program 2
const number = new Promise((resolve, reject)=>{
    const num1 = 5
    const num2 = 10
    const result = num1+num2
    if (result === 15) {
        resolve("Hasilnya Benar!")
    }else{
        reject("Hasilnya salah")
    }
})

number.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})