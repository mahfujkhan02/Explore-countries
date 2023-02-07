// console.log("Tanim")

const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    
    .then(res => res.json())
    .then(data => displayCountries(data))

   
    }

    const displayCountries = countries =>{

        for(const country of countries)
        console.log(country)

}

loadCountries()