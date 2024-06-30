let Base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll("#to-from select");

const getRate = async ()=>{
    let to = dropdowns[0].value;
    let from = dropdowns[1].value;
    console.log(to,":",from);
};

for(let country in countryList) {
    dropdowns.forEach(dropdown => {
        let option = document.createElement("option");
        option.innerText = country;
        option.value = country;
        if(dropdown.name === "from" && country === "USD"){
            option.selected = "selected";
        }else if (dropdown.name === "to" && country === "INR") {
            option.selected = "selected";
        }
        dropdown.append(option);
    });
};

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
});

const updateFlag = (el)=>{
    let newCode = el.value;
    let newCountry = countryList[newCode];
    let imgNew = `https://flagsapi.com/${newCountry}/flat/64.png`;
    let imgOld = el.parentElement.querySelector("img");
    imgOld.src = imgNew;
}


let btn = document.querySelector("#btn");

btn.addEventListener("click",(evt)=>
{
    evt.preventDefault();
    getRate();
})