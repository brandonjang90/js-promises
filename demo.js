// let url = "http://numbersapi.com/";
// let favNum = 8;

// axios.get(url)
//     .then(res => {
//         console.log("FIRST PROMISE RESOLVED!")
//         console.log(res.data)
//         return axios.get(res.data.residents[0])
//     })
//     .then(res => {
//         console.log("SECOND PROMISE RESOLVED!")
//         console.log(res.data)
//         return axios.get(res.data.films[0])
//     })
//     .then(res => {
//         console.log("THIRD PROMISE RESOLVED!")
//         console.log(res.data)
//     })
//     .catch(err => console.log("REJECTED!", err))

// const h1 = document.querySelector('h1')
// setTimeout(()=> {
//     h1.style.color = 'red'
//     setTimeout(()=>{
//         h1.style.color = 'orange'
//         setTimeout(()=>{
//             h1.style.color = 'blue'
//             setTimeout(()=>{
//                 h1.style.color = 'purple'
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// function changeColor(el, color){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             el.style.color = color;
//             resolve()
//         }, 1000)
//     })
// }

// changeColor(h1, 'red')
// .then(() => changeColor(h1,'orange'))
// .then(() => changeColor(h1,'yellow'))
// .then(() => changeColor(h1,'green'))
// .then(() => changeColor(h1,'blue'))
// .then(() => changeColor(h1,'indigo'))
// .then(() => changeColor(h1,'violet'))


// function mockAjaxRequest(){
//     return new Promise(function(resolve, reject){
//     let probSuccess = 0.5;
//     let requestTime = 1000;

//     setTimeout(function(){
//         let randomNum = Math.random();
//         if (randomNum < probSuccess) {
//             let data = "here's your data!";
//             resolve(data);
//         } else {
//             reject("Sorry, your request failed.");
//         }
//         }, requestTime);
//     });
// }

// mockAjaxRequest()
//     .then(data => {
//         console.log(data);
//         return mockAjaxRequest()
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))

