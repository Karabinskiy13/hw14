//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


function wakeup(inTime) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(inTime){
                resolve('you have time for breakfast')
            }
            else {
                reject('you dont have enough time for shower')
            }
        },500)
    })
}
function shower(inTime) {
    return new Promise((resolve, reject )=>{
        setTimeout( ()=>{
            if (inTime){
                resolve('you have time for shower')
            }
            else {
                reject('you dont have enough time for breakfast')
            }
        },1000)
    })
}
function breakfast(inTime){
    return new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            if (inTime){
                resolve('breakfast')
            }
            else{
                reject('late for job')
            }
        },2000)
    })
}
function workTasks(inTime){
    return new Promise((resolve, reject )=>{
        setTimeout(()=>{
            if(inTime){
                resolve('Congrats you will be home on time')
            }
            else{
                reject('Sorry, you have to stay at work')
            }
        }, 10000)
    })
}

function bakery(inTime){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (inTime){
                resolve('Hurray, i have time to get to the bakery')
            }
            else{
                reject('I had to stay late at work, today without bakery')
            }
        }, 2000)
    })
}
function homeTasks(inTime){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (inTime){
                resolve('ok, you did all the tasks')
            }
            else{
                reject('you watched youtube for a long time and you have to do tasks half night ')
            }
        },4000)
    })
}

function watchingTV(inTime){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (inTime){
                resolve('you watched one film and go sleep')
            }
            else{
                reject('you watched three films and you wont get enough sleep ')
            }
        },1000)
    })
}

// wakeup(true)
//     .then(resolve=>{
//         console.log(resolve)
//         return shower(true);
//     })
//     .then(resolve=>{
//         console.log(resolve)
//         return breakfast(true);
//     })
//     .then(resolve=>{
//         console.log(resolve)
//         return workTasks(true);
//     })
//     .then(resolve=>{
//         console.log(resolve)
//         return bakery(true);
//     })
//     .then(resolve=>{
//         console.log(resolve)
//         return homeTasks(true);
//     })
//     .then(resolve=>{
//         console.log(resolve)
//         return watchingTV(true);
//     })
//
// .then(end=>{
//     console.log(end)
// })
//
// async function routine() {
//         const wake = await wakeup(true);
//     console.log(wake);
//         const bathroom = await shower(true);
//     console.log(bathroom);
//         const morningFood = await breakfast(true);
//     console.log(morningFood);
//         const work = await workTasks(true);
//     console.log(work);
//         const bake = await bakery(true);
//     console.log(bake);
//         const home = await homeTasks(true);
//     console.log(home);
//         const tv = await watchingTV(true);
//     console.log(tv);
//
//
//
//
//
//
//
//     console.log(tv);
// }
// routine()


// setTimeout(function wakeup (inTime) {
//     if (inTime){
//         console.log('you have time for breakfast')
//     }
//     else{
//         console.log('you dont have enough time for shower')
//     }
//     setTimeout(function shower (inTime) {
//         if (inTime){
//             console.log('you have time for shower')
//         }
//         else{
//             console.log('you dont have enough time for breakfast')
//         }
//         setTimeout(function breakfast (inTime) {
//             if (inTime){
//                 console.log('you have time for breakfast')
//             }
//             else {
//                 console.log('late for job')
//             }
//             setTimeout(function workTasks (inTime) {
//                 if (inTime){
//                     console.log('Congrats you will be home on time')
//                 }
//                 else{
//                     console.log('Sorry, you have to stay at work')
//                 }
//                 setTimeout(function bakery (inTime) {
//                     if (inTime){
//                         console.log('Hurray, i have time to get to the bakery')
//                     }
//                     else{
//                         console.log('I had to stay late at work, today without bakery')
//                     }
//                     setTimeout(function homeTasks (inTime) {
//                         if (inTime){
//                             console.log('ok, you did all the tasks')
//                         }
//                         else{
//                             console.log('you watched youtube for a long time and you have to do tasks half night')
//                         }
//                         setTimeout(function wathingTV (inTime) {
//                             if (inTime){
//                                 console.log('you watched one film and go sleep')
//                             }
//                             else{
//                                 console.log('you watched three films and you wont get enough sleep')
//                             }
//                         },1000)
//                     },4000)
//
//                 },2000)
//             },10000)
//         }, 2000)
//     },1000)
// },500)
