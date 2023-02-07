// console.log("Tanim")

const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    
    .then(res => res.json())
    .then(data => displayCountries(data))

   
    }

    const displayCountries = countries =>{

       // for(const country of countries)
       // console.log(country)

       const countryContainer = document.getElementById('countries-contaiener')

       countries.forEach(country => {
 
         const countryDiv = document.createElement('div');
         countryDiv.classList.add('country')
         //console.log(country)

         countryDiv.innerHTML =  `
         <h3> Name : ${country.name.common} <h3>
         <p>Capital : ${country.capital ? country.capital [0] : 'No capital'}</p>
         <button onclick ="loadCountryDetail('${country.cca2}')">Details</button>
         
         `;
        countryContainer.appendChild(countryDiv)

        console.log(country)


       });  

    }

    const loadCountryDetail = (code) => {
        //https://restcountries.com/v3.1/alpha/{code}
      
        const url = `https://restcountries.com/v3.1/alpha/${code}`
      
        //console.log('get country details', code);
        //console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data =>displayCountryDetails(data[0]))
      
      }

loadCountries()