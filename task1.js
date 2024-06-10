const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
               return item === day
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
};

// then and catch
cekHariKerja('jumat')
.then(function(hasil){
    console.log('Hari '+ hasil + ' adalah hari kerja')
})
.catch((error) => {
    console.log(error.message)
})

// const success = (day)=>{
//     console.log('Hari '+ day + ' adalah hari kerja')
// }
// const failed = (err)=>{
//     console.log(err.message)
// }

// cekHariKerja('sabtu')
// .then(success)
// .catch(failed)


// try and catch
const cekHari = async (day) => {
    try {
        const result = await cekHariKerja(day)
        console.log('Hari '+ result + ' adalah hari kerja')
    } catch (err) {
        console.log(err.message)
    }
}
cekHari('senin')
cekHari('minggu')