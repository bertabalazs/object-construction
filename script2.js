function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

 //mwnubutton
 const menuButton = () => {
    return `
    <button id="menuButton">
        <svg width="40" height="40">
            <rect width="20" height="2" />
            <rect width="20" height="2" />
            <rect width="20" height="2" />
        </svg>
    </button>
    `
}

//Components
const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
    `;
}

 const loadEvent = async _ => {
    //Get data
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    //console.log(countryArr[0]);
    //Process data
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0]);
    })
    console.log(countries);

    /* const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML('beforeend', header("Countries", menuButton)); */

    const countryCard = (country) => {
        return `
        <div class= "card">
            <h2>${country.name}</h2>
            <h3>${country.short}</h3>
            <p>${country.continent}</p>
            <img src="${country.flag}"></img>
            <p>${country.population}</p>
        </div>
        `;
    };

   

    const countryCards = (contentHTML) => {
        return `
        <section class="country-cards">${contentHTML}</section>
        `
    }

    // add header html
    const root = document.querySelector('#root')
    root.insertAdjacentHTML("beforeend", header('countries', menuButton));

    //create country html
    let countryHTML = '';
    countries.forEach(country => {
        countryHTML += countryCard(country);
    })

    //add cards html
    root.insertAdjacentHTML("beforeend", countryCards(countryHTML))



    document.getElementById("root").insertAdjacentHTML("beforeend", countryCards);

    const getMenuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("clicked")
    })

}





window.addEventListener("load", loadEvent)