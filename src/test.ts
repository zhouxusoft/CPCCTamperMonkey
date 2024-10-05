function getInfo () {
    return new Promise((resolve, reject) => {
        fetch('https://godxu.top', {
            method: 'GET',
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

getInfo().then(res => {
    console.log(res)
})