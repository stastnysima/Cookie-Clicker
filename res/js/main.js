const cookie = document.getElementById("cookie")    
const counter = document.getElementById("counter")
const clickupgrade = document.getElementById("clickupgrade")
const clickupgrade2 = document.getElementById("clickupgrade2")
const clickupgrade3 = document.getElementById("clickupgrade3")

let cookies = 0;
let clickIncrease = 1;
let clickIncreasePrice = 100;

let autoClickerIncrease = 0 
let autoCLickerPrice = 200 

cookie.onclick = () => {
    cookies += clickIncrease;
    counter.innerHTML = cookies;    
}
clickupgrade.onclick = () => {
    if (cookies >= clickIncreasePrice) {
        cookies -= clickIncreasePrice;
        clickIncreasePrice += 100;
        clickupgrade.innerHTML = `Buy upgrade: ${clickIncreasePrice}`;
        counter.innerHTML = cookies;
        clickIncrease++;
    }
}
clickupgrade2.onclick = () => {
    cookies += 40000000000000000000000000000;
    counter.innerHTML = cookies;
}
clickupgrade3.onclick = () => {
    if (cookies >= autoCLickerPrice) {
        cookies -= autoCLickerPrice;
        counter.innerHTML = cookies;
        autoCLickerPrice += 100
        clickupgrade3.innerHTML = `Korean L9 turbobroken autosmite script 100%WR: ${autoCLickerPrice}`;
        if (autoClickerIncrease == 0) {
            setInterval(() => {
                cookies += autoClickerIncrease;
                counter.innerHTML = cookies;
        },1000);
        }
        autoClickerIncrease++;
    }
}






