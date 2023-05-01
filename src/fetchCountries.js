



// export named ///


function fetchCountries(name) {
    return fetch("https://restcountries.com/v3.1/name/{name}?fields=name,capital,population,flags,languages")
    .then((response) => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}









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


