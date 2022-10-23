// let promise = new Promise((resolve, reject) => {
//     reject('rejected')  
// })

// promise.then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.log(err);
// })

// p1 8 s 
// p2 2 s 
// p3 5 s
// p4 6 s
// p5 1 s


// console.log("console.log");



let getData = async () => {
    let apidata = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json')
    .then((response) => response.json())
    .then(data => console.log(data)) 

    console.log("fdsafadfsasdfasdf");
}

getData();