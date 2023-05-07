



// export named ///


const API_URL = "https://restcountries.com/v3.1/name/"

export { fetchCountries};

const fetchCountries = (name) => {
    return fetch(
        `${API_URL}/${name}?fields=name,capital,population,flags,languages`
    ).then((res) => {
        if (res.ok) {
            return res.json();
        }
        if (!res.ok) {
            throw new Error(res.status);
        }
    })
}





// const fetchCountries = (name) => {
// // function fetchCountries(name) {
//     return fetch("https://restcountries.com/v3.1/name/{name}?fields=name,capital,population,flags,languages")
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
// }

// export { fetchCountries};







// const values = [
//     {name}, // name.official
//     {capital},
//     {population},
//     {flags}, // flags.svg
//     {languages}
// ]


/////////////////////
//  https://restcountries.com/v3.1/name/{name}

//  https://restcountries.com/v3.1/alpha?codes={code},{code},{code}


////////////////////////

// https://restcountries.com/v3.1/{service}?fields={field},{field},{field}

// https://restcountries.com/v3.1/all?fields=name,capital,currencies

////////////////////////////////////////////


