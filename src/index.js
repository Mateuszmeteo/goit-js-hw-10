import './css/styles.css';

//biblioteki//

import { fetchCountries } from './fetchCountries';




const DEBOUNCE_DELAY = 300;


const inputEl = document.getElementById('search-box')
const listEl = document.querySelector('.country-list')
const divEl = document.querySelector('.country-info')





// const markupInfo


const addElList = e => {
    const countriesSearch = e.target.value.trim();

    const markupList = `<li>${inputEl.value}</li>`
    listEl.innerHTML = 'lll';

    if (countriesSearch !== '') {
        // fetchCountries.map 


    }
}



inputEl.addEventListener('input', addElList)


// const listInfo

///// test methods //////////////



        // console.log(markupList)
        // listEl.innerHTML = markupList
        // // listEl.innerHTML = ` <li>${inputEl.value}`
        // // console.log(fetchCountries())




// const countriesSearch = () => {
//     fetchCountries.map(value) 
// }

//  function testMetod () {
//     setTimeout(() => {
//         const listElBase = document.createElement('li')
//             listElBase.innerHTML = inputEl.value
//             listEl.appendChild(listElBase) 

//     }, DEBOUNCE_DELAY)
//  }

// inputEl.addEventListener('input', testMetod)


// console.log(fetchCountries)



///////////////////////




// inputEl.addEventListener('input', (e) => {
    
// })
