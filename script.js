const btnConvert = document.querySelector(".btn");
const currencySelect = document.querySelector(".currency-select");

function convertCurrency() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValuetoConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  const dolarToday = 5.716;
  const euroToday = 6.16;
  const ieneToday = 0.04;
  const libraToday = 7.37;

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);

  } else if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }else if(currencySelect.value === "iene"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
     style: "currency",
     currency: "JPY" , 
    }).format(inputCurrencyValue / ieneToday);

  }else if(currencySelect.value === "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    }).format(inputCurrencyValue / libraToday)
  }

  currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if(currencySelect.value === "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png";

    }else if(currencySelect.value === "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png";

    }else if(currencySelect.value === "iene"){
        currencyName.innerHTML = "Iene japonês"
        currencyImg.src = "./assets/iene.png"
    }else if(currencySelect.value === "libra"){
        currencyName.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/libra.png"
    }
    convertCurrency();
}

currencySelect.addEventListener("change", changeCurrency)
btnConvert.addEventListener("click", convertCurrency);
