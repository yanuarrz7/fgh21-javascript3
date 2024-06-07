const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => item === day);
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
};

// then and catch
cekHariKerja('jumat').then(function(hasil){
    console.log(hasil)
})
.catch((error) => {
    console.log(error)
})

// try and catch
const cekHari = async (day) => {
    try {
        const result = await cekHariKerja(day)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

cekHari('senin')
cekHari('minggu')
