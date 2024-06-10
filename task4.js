const request = fetch('https:jsonplaceholder.typicode.com/users')
request.then(res =>{
  res.json().then(data =>{
    const names = data.map(people => people.name)
    console.log(names)
  })
})