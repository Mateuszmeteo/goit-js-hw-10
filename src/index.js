import './css/styles.css';

//biblioteki//

import { fetchCountries } from './fetchCountries';




const DEBOUNCE_DELAY = 300;


const inputEl = document.getElementById('search-box')
const listEl = document.querySelector('.country-list')
const divEl = document.querySelector('.country-info')


const countriesSearch = () => {
    fetchCountries.map(value) 
}

 function testMetod () {
    setTimeout(() => {
        const listElBase = document.createElement('li')
            listElBase.innerHTML = inputEl.value
            listEl.appendChild(listElBase) 

    }, DEBOUNCE_DELAY)
 }

inputEl.addEventListener('input', testMetod)











// inputEl.addEventListener('input', (e) => {
    
// })
