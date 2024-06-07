const cekHariKerja = (day)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

const hasil = new Promise(cekHariKerja)

hasil.then((cek)=>{
    console.log(cek)
}).catch((error)=>{
    console.log(error)
})