

import './css/styles.css';

//biblioteki// notiflix // lodash //
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';




const DEBOUNCE_DELAY = 300;


const inputEl = document.getElementById('search-box')
const listEl = document.querySelector('.country-list')
const divEl = document.querySelector('.country-info')



const searchCountryFunction = e => {
    const searchCountries = e.target.value.trim();
    listEl.innerHTML = '';

    if (searchCountries !== '') {
      fetchCountries(searchCountries)

        .then(data => {
          console.log(data)
            if (data.length === 1) {
              const listInfo = data
                .map(({name, flags, capital, population, languages}) => 
                    `<h2 class="country-div-h2"><img class="country-div-img" src ="${flags.svg}"/> 
                    ${name.official}</h2>
                    <p><b>Capital:</b> ${capital}</p>
                    <p><b>Population:</b> ${population}</p>
                    <p><b>Languages:</b> ${Object.values(languages).join(', ')}</p>`)
                    
                .join('');
              divEl.innerHTML = listInfo 
            }
            else if (data.length >=2  && data.length <= 10) {
              const listCountry = data
                .map(({name, flags}) => 
                    `<li class="country-list-el">
                    <img class="country-list-img" src="${flags.svg}"/> 
                    <p><b>${name.official}</b></p>
                    </li>`)
                .join('');
                console.log(listCountry)
                console.log(listEl)
              listEl.innerHTML = listCountry
            } 
            else if (data.length > 10) {
                // alert('max elements')
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
            }
        })
        .catch(err => {Notiflix.Notify.warning("Oops, there is no country with that name")})
    }
    divEl.innerHTML = '';
    listEl.innerHTML = '';
}


inputEl.addEventListener('input', debounce(searchCountryFunction, DEBOUNCE_DELAY))



// /////////////////...................................//////////////////////////////


// // // inputEl.addEventListener('input', e => {
// // function searchingCountryInfo () { 
// //     const searchCountries = e.currentTarget.value.trim(); //target//
// //     listEl.innerHTML ='';

// //     // if (searchCountries !== '') {
// //         fetchCountries(searchCountries)
// //         .then(data => {
// //             if (data.length >= 20) { 
// //             const markup = elements
// //             .map((element) => {
// //                 return 
// //                 `<li>${element.name.official}
// //                 ${element.flags.svg}
// //                 </li>`
// //             })
// //             .join("")
// //             listEl.innerHTML = markup;
        
// //             }
// //             else if (searchCountries >=2 && searchCountries <=10) {
// //                 console.log('ghghghgg')
// //             }

// //         })
// //         .catch(error => {
// //             alert('kkjljll')
// //         })
// //     }
// // // }

// // inputEl.addEventListener('input', searchingCountryInfo)






// // const markupInfo
// // {name.official, capital, population, flags, languages}

// // const addElList = e => {
// //     const countriesSearch = e.target.value.trim();

// //     const markupList = `<li>${inputEl.value}</li>`
// //     listEl.innerHTML = 'lll';

// //     if (countriesSearch !== '') {
// //         // fetchCountries.map 


// //     }
// // }



// // inputEl.addEventListener('input', addElList)


// // const listInfo

// ///// test methods //////////////



//         // console.log(markupList)
//         // listEl.innerHTML = markupList
//         // // listEl.innerHTML = ` <li>${inputEl.value}`
//         // // console.log(fetchCountries())




// // const countriesSearch = () => {
// //     fetchCountries.map(value) 
// // }

// //  function testMetod () {
// //     setTimeout(() => {
// //         const listElBase = document.createElement('li')
// //             listElBase.innerHTML = inputEl.value
// //             listEl.appendChild(listElBase) 

// //     }, DEBOUNCE_DELAY)
// //  }

// // inputEl.addEventListener('input', testMetod)


// // console.log(fetchCountries)



// ///////////////////////




// // inputEl.addEventListener('input', (e) => {
    
// // })


// ////........................................///////////////////////...........///////////////////



