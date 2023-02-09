const loadData=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>loadCountry(data))
}

const loadCountry=(countries)=>{
    // console.log(countries)
    const contriesContainer=document.getElementById('country-container');
countries.forEach(country => {
    const countryDiv=document.createElement('div');
    console.log(country)
});

}
loadData();