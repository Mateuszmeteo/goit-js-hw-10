import './css/styles.css';

//biblioteki// notiflix // lodash //
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';




const DEBOUNCE_DELAY = 300;


const inputEl = document.getElementById('search-box')
const listEl = document.querySelector('.country-list')
const divEl = document.querySelector('.country-info')





// inputEl.addEventListener('input', e => {
function searchingCountryInfo () { 
    const searchCountries = e.currentTarget.value.trim(); //target//
    listEl.innerHTML ='';

    // if (searchCountries !== '') {
        fetchCountries(searchCountries)
        .then(data => {
            if (data.length >= 20) { 
            const markup = elements
            .map((element) => {
                return 
                `<li>${element.name.official}
                ${element.flags.svg}
                </li>`
            })
            .join("")
            listEl.innerHTML = markup;
        
            }
            else if (searchCountries >=2 && searchCountries <=10) {
                console.log('ghghghgg')
            }

        })
        .catch(error => {
            alert('kkjljll')
        })
    }
// }

inputEl.addEventListener('input', searchingCountryInfo)






// const markupInfo
// {name.official, capital, population, flags, languages}

// const addElList = e => {
//     const countriesSearch = e.target.value.trim();

//     const markupList = `<li>${inputEl.value}</li>`
//     listEl.innerHTML = 'lll';

//     if (countriesSearch !== '') {
//         // fetchCountries.map 


//     }
// }



// inputEl.addEventListener('input', addElList)


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
