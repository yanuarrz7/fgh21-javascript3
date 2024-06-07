const apiUrl = "https://jsonplaceholder.typicode.com/users"

fetch(apiUrl)
.then(respon => {
    if (!respon.ok) {
        console.log("Respon koneksi tidak baik")
    }
    return respon.json()
})
.then(namaData => {
    console.log('Nama Data:', namaData);
  })
  .catch(error => {
    console.error('Error:', error);
  });