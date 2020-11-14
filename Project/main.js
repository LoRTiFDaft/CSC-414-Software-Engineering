// Global Variables

const addCurrencyBtn = document.querySelector(".add-currency-btn");
const addCurrencyList = document.querySelector(".add-currency-list");
const currenciesList = document.querySelector(".currencies");

const dataURL = "https://api.exchangeratesapi.io/latest";

const initiallyDisplayedCurrencies = ["USD", "EUR", "GBP", "JPY", "RUB","MXN","CAD","ZAR","CHF","INR"];
let baseCurrency;
let baseCurrencyAmount;

let currencies = [
  {
    name: "US Dollar",
    text: "The United States dollar is the official currency of the United States and its territories per the Coinage Act of 1792. One dollar is divided into 100 cents (symbol: ¢).  The Coinage Act of 1792 created a decimal currency by creating the following coins: tenth dollar(dime), one-twentieth dollar(nickel), one-hundredth dollar(penny). In addition the act created the dollar, half dollar(50 cent coin), and quarter dollar(quarter) coins. All of these coins are still minted in 2020. Since the suspension in 1971 of convertibility of paper U.S. currency into any precious metal, the U.S. dollar is de facto fiat money.  As it is the most used in international transactions, the U.S. dollar is the world's primary reserve currency. Besides the United States, it is also used as the sole currency in two British Overseas Territories in the Caribbean: the British Virgin Islands and Turks and Caicos Islands. One theory about how the ‘$’ sign came to be was that the  sign was the result of a late 18th-century evolution of the scribal abbreviation ‘ps’ for the peso, the common name for the Spanish dollars that were in wide circulation in the New World from the 16th to the 19th centuries. These Spanish pesos or dollars were minted in Spanish America, namely in Mexico City; Potosí, Bolivia; and Lima, Peru. The p and the s eventually came to be written over each other giving rise to $.",
    link: "For more Information Please check out this Link: https://en.wikipedia.org/wiki/United_States_dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
    
  },
  {
    name: "Euro",
    text: " The euro is the official currency of 19 of the 27 member states of the European Union. This group of states is known as the eurozone or euro area, and counts about 343 million citizens as of 2019. The euro, which is divided into 100 cents (also referred to as euro cents, especially when distinguishing them from other currencies, and referred to as such on the common side of all cent coins), is the second-largest and second-most traded currency in the foreign exchange market after the United States dollar. The euro is the second-largest reserve currency as well as the second-most traded currency in the world after the United States dollar. The name 'euro' was officially adopted in Madrid on 16 December 1995. Belgian Esperantist Germain Pirlot, a former teacher of French and history is credited with naming the new currency by sending a letter to then President of the European Commission, Jacques Santer, suggesting the name 'euro' on 4 August 1995. Within the EU, several currencies are pegged to the euro, mostly as a precondition to joining the eurozone. The Bulgarian lev was formerly pegged to the Deutsche Mark; one other EU currency with a direct peg due to ERM II is the Danish krone.",
    link: " For more Information Please check out this Link: https://en.wikipedia.org/wiki/Euro ",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },
  {
    name: "Japanese Yen",
    text: "The yen is the official currency of Japan. It is the third most traded currency in the foreign exchange market after the United States dollar and the euro. It is also widely used as a reserve currency after the U.S. dollar, the euro, and the U.K. pound sterling. Before the Meiji Restoration, which postulated the pursuit of a uniform currency throughout the country, modelled after the European decimal currency system, Japan's feudal fiefs all issued their own money, hansatsu, in an array of incompatible denominations. The New Currency Act of 1871 did away with these and established the yen, as the new decimal currency.  The 1-yen coin is made out of 100% aluminum and can float on water if placed correctly. Due to the great differences in style, size, weight and the pattern present on the edge of the coin they are very easy for people with visual impairments to tell apart from one another.",
    link: "For more Information Please check out this Link: https://en.wikipedia.org/wiki/Japanese_yen",
    abbreviation: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif"
  },
  {
    name: "British Pound",
    text: "A common slang term for the pound sterling or pound is quid, which is singular and plural, except in the common phrase ‘quids in!’. The term may have come via Italian immigrants from ‘scudo’, the name for a number of coins used in Italy until the 19th century; or from Latin 'quid' via the common phrase quid pro quo, literally, ‘what for what’, or, figuratively, ‘An equal exchange or substitution’ Before decimalisation in 1971, the pound was divided into 20 shillings and each shilling into 12 pence, making 240 pence to the pound. Various coin denominations had, and in some cases continue to have, special names—such as crown, farthing, sovereign and guinea. The pound sterling is the world's oldest currency still in use and which has been in continuous use since its inception.  Since decimalisation on Decimal Day in 1971, the pound has been divided into 100 pence (denoted on coinage, until 1981, as ‘new pence’). The symbol for the penny is ‘p’; hence an amount such as 50p (£0.50) properly pronounced ‘fifty pence’ is more colloquially, quite often, pronounced ‘fifty pee’. ",
    link: "For more Information Please check out this Link: https://en.wikipedia.org/wiki/Pound_sterling#Quid_(slang)",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif"
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif"
  },
  {
    name: "Canadian Dollar",
    text: "The Canadian dollar is the currency of Canada. It is abbreviated with the dollar sign $, or sometimes CA$, Can$ or C$ to distinguish it from other dollar-denominated currencies. It is divided into 100 cents (¢). Owing to the image of a loon on the one-dollar coin, the currency is sometimes referred to as the loonie by English-speaking Canadians and foreign exchange traders and analysts, or as the huard (the word for the common loon in French) by French-speaking Canadians. Accounting for approximately 2% of all global reserves, the Canadian dollar is the fifth most held reserve currency in the world, behind the U.S. dollar, the euro, the yen and the pound sterling.",
    link: "For more Information Please check out this Link:  https://en.wikipedia.org/wiki/Canadian_dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif"
  },
  {
    name: "Swiss Franc",
    text: "The franc is the currency and legal tender of Switzerland and Liechtenstein it is also legal tender in the Italian exclave of Campione d'Italia. The smaller denomination, a hundredth of a franc, is a Rappen (Rp.) in German, centime (c.) in French, centesimo (ct.) in Italian, and rap (rp.) in Romansh. Before the introduction of the franc in 1798, about 75 entities were making coins in Switzerland, including the 25 cantons and half-cantons, 16 cities, and abbeys, resulting in about 860 different coins in circulation, with different values, denominations and monetary systems. 100 centimes = 1 franc",
    link: "For more Information Please check out this Link: https://en.wikipedia.org/wiki/Swiss_franc",
    abbreviation: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif"
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif"
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif"
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif"
  },
  {
    name: "Mexican Peso",
    text: "The Mexican is the currency of Mexico. Modern peso and dollar currencies have a common origin in the 15th–19th century Spanish dollar, most continuing to use its sign, '$'. The Mexican peso is the 10th most traded currency in the world, the third most traded currency from the Americas (after the United States dollar and Canadian dollar), and the most traded currency from Latin America. The peso is subdivided into 100 centavos, represented by '¢'. The peso was the name of the eight-real coins issued in Latin America by Spain. These were the so-called Spanish dollars or pieces of eight. 100 centavos = 1 peso",
    link: "For more Information Please check out this Link: https://en.wikipedia.org/wiki/Mexican_peso",
    abbreviation: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif"
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif"
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif"
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif"
  },
  {
    name: "South Korean Won",
    abbreviation: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif"
  },
  {
    name: "Turkish Lira",
    abbreviation: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif"
  },
  {
    name: "Russian Ruble",
    text: "The Russian ruble or rouble is the currency of the Russian Federation, the two partially recognised republics of Abkhazia and South Ossetia and the two unrecognised republics of Donetsk and Luhansk. The ruble is subdivided into 100 kopeks (sometimes written as kopecks or copecks; Russian: копе́йка kopeyka, plural: копе́йки kopeyki). The ruble was the currency of the Russian Empire and of the Soviet Union (as the Soviet ruble). However, today only Russia, Belarus and Transnistria use currencies with the same name. The ruble was the first currency in Europe to be decimalised, in 1704, when the ruble became equal to 100 kopeks.",
    link: "For more Information Please check out this Link:  https://en.wikipedia.org/wiki/Russian_ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif"
  },
  {
    name: "Indian Rupee",
    text: "The Indian rupee is the official currency of India. The rupee is subdivided into 100 paise (singular: paisa). In 2010, a new rupee sign (₹) was officially adopted. It was designed by D. Udaya Kumar. It was derived from the combination of the Devanagari consonant ‘र’ (ra) and the Latin capital letter ‘R’ without its vertical bar (similar to the R rotunda). Historically, the rupee was a silver coin. This had severe consequences in the nineteenth century when the strongest economies in the world were on the gold standard (that is, paper linked to gold). The discovery of large quantities of silver in the United States and several European colonies caused the panic of 1873 which resulted in a decline in the value of silver relative to gold, devaluing India's standard currency. This event was known as ‘the fall of the rupee.’ In Britain the Long Depression resulted in bankruptcies, escalating unemployment, a halt in public works, and a major trade slump that lasted until 1897. The Indian rupee replaced the Danish Indian rupee in 1845, the French Indian rupee in 1954 and the Portuguese Indian escudo in 1961. Following the independence of British India in 1947 and the accession of the princely states to the new Union, the Indian rupee replaced all the currencies of the previously autonomous states (although the Hyderabadi rupee was not demonetised until 1959). 100 paise = 1 Indian rupee",
    link:"For more Information Please check out this Link:  https://en.wikipedia.org/wiki/Indian_rupee",
    abbreviation: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif"
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif"
  },
  {
    name: "South African Rand",
    text: "The rand is the official currency of South Africa and is subdivided into 100 cents. The rand is legal tender in the Common Monetary Area between South Africa, Eswatini, Lesotho and Namibia, although the last three countries do have their own currencies pegged at par with the rand. The rand was introduced in the Union of South Africa on 14 February 1961, three months before the country declared itself a republic. The government introduced a mascot, Decimal Dan, 'the rand-cent man' (known in Afrikaans as Daan Desimaal). This was accompanied by a radio jingle, to inform the public about the new currency. Coins were introduced in 1961 in denominations of 1⁄2, 1, 2 1⁄2, 5, 10, 20, and 50 cents but have recently stopped producing all but the 10, 20 and 50 cent coins.",
    link: "For more Information Please check out this Link: https://en.wikipedia.org/wiki/South_African_rand",
    abbreviation: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif"
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif"
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif"
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif"
  },
  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif"
  },
  {
    name: "Hungarian Forint",
    abbreviation: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif"
  },
  {
    name: "Icelandic Krona",
    abbreviation: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif"
  },
  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif"
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif"
  },
  {
    name: "Romanian Leu",
    abbreviation: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif"
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif"
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif"
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif"
  },
  {
    name: "Israeli Shekel",
    abbreviation: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif"
  }
];

// Event Listeners

addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
  addCurrencyBtn.classList.toggle("open");
}

addCurrencyList.addEventListener("click", addCurrencyListClick);

function addCurrencyListClick(event) {
  const clickedListItem = event.target.closest("li");
  if(!clickedListItem.classList.contains("disabled")) {
    const newCurrency = currencies.find(c => c.abbreviation===clickedListItem.getAttribute("data-currency"));
    if(newCurrency) newCurrenciesListItem(newCurrency);
  }
}

currenciesList.addEventListener("click", currenciesListClick);

function currenciesListClick(event) {
  if(event.target.classList.contains("close")) {
    const parentNode = event.target.parentNode;
    parentNode.remove();
    addCurrencyList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove("disabled");
    if(parentNode.classList.contains("base-currency")) {
      const newBaseCurrencyLI = currenciesList.querySelector(".currency");
      if(newBaseCurrencyLI) {
        setNewBaseCurrency(newBaseCurrencyLI);
        baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector(".input input").value);
      }
    }
  }
}

function setNewBaseCurrency(newBaseCurrencyLI) {
  newBaseCurrencyLI.classList.add("base-currency");
  baseCurrency = newBaseCurrencyLI.id;
  const baseCurrencyRate = currencies.find(currency => currency.abbreviation===baseCurrency).rate;
  currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
    const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
    const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
    currencyLI.querySelector(".base-currency-rate").textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
  });
}

currenciesList.addEventListener("input", currenciesListInputChange);

function currenciesListInputChange(event) {
  const isNewBaseCurrency = event.target.closest("li").id!==baseCurrency;
  if(isNewBaseCurrency) {
    currenciesList.querySelector(`#${baseCurrency}`).classList.remove("base-currency");
    setNewBaseCurrency(event.target.closest("li"));
  }
  const newBaseCurrencyAmount = isNaN(event.target.value) ? 0 : Number(event.target.value);
  if(baseCurrencyAmount!==newBaseCurrencyAmount || isNewBaseCurrency) {
    baseCurrencyAmount = newBaseCurrencyAmount;
    const baseCurrencyRate = currencies.find(currency => currency.abbreviation===baseCurrency).rate;
    currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
      if(currencyLI.id!==baseCurrency) {
        const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
        const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
        currencyLI.querySelector(".input input").value = exchangeRate*baseCurrencyAmount!==0 ? (exchangeRate*baseCurrencyAmount).toFixed(4) : "";
      }
    });
  }
}

currenciesList.addEventListener("focusout", currenciesListFocusOut);

function currenciesListFocusOut(event) {
  const inputValue = event.target.value;
  if(isNaN(inputValue) || Number(inputValue)===0) event.target.value="";
  else event.target.value = Number(inputValue).toFixed(4);
}

currenciesList.addEventListener("keydown", currenciesListKeyDown);

function currenciesListKeyDown(event) {
  if(event.key==="Enter") event.target.blur();
}

// Auxiliary Functions

function populateAddCyrrencyList() {
  for(let i=0; i<currencies.length; i++) {
    addCurrencyList.insertAdjacentHTML(
      "beforeend", 
      `<li data-currency=${currencies[i].abbreviation}>
        <img src=${currencies[i].flagURL} class="flag"><span>${currencies[i].abbreviation} - ${currencies[i].name}</span>
      </li>`
    );
  }
}

function populateCurrenciesList() {
  for(let i=0; i<initiallyDisplayedCurrencies.length; i++) {
    const currency = currencies.find(c => c.abbreviation===initiallyDisplayedCurrencies[i]);
    if(currency) newCurrenciesListItem(currency);
  }
}

function newCurrenciesListItem(currency) {
  if(currenciesList.childElementCount===0) {
    baseCurrency = currency.abbreviation;
    baseCurrencyAmount = 0;
  }
  addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled");
  const baseCurrencyRate = currencies.find(c => c.abbreviation===baseCurrency).rate;
  const exchangeRate = currency.abbreviation===baseCurrency ? 1 : (currency.rate/baseCurrencyRate).toFixed(4);
  const inputValue = baseCurrencyAmount ? (baseCurrencyAmount*exchangeRate).toFixed(4) : "";

  currenciesList.insertAdjacentHTML(
    "beforeend",
    `<li class="currency ${currency.abbreviation===baseCurrency ? "base-currency" : ""}" id=${currency.abbreviation}>
      <img src=${currency.flagURL} class="flag">
      <div class="info">
        <p class="input"><span class="currency-symbol">${currency.symbol}</span><input placeholder="0.0000" value=${inputValue}></p>
        <p class="currency-name">${currency.abbreviation} - ${currency.name} <br><br> ${currency.text} <br><br> ${currency.link} </p>
        <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
      </div>
      <span class="close">&times;</span>
    </li>`
  );
}8

fetch(dataURL)
  .then(res => res.json())
  .then(data => {
    document.querySelector(".date").textContent = data.date;
    data.rates["EUR"] = 1;
    currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
    currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);
    populateAddCyrrencyList();
    populateCurrenciesList();
  })
  .catch(err => console.log(err));