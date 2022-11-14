function makeCall(){

    fetch('https://api.github.com/users')
    .then(response=>{
        console.table(response.json())
    })
}

makeCall();